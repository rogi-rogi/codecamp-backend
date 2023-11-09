import { ApolloServer, gql } from "apollo-server";
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";

const typeDefs = gql`
  # Board에 관한 Query는
  # 로직 내에 Query가 없는 채로 실행했을 때 나타나는
  # "Error: Query root type must be provided." 에러 방지를 위한 것입니다.
  type BoardReturn {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [BoardReturn]
  }

  type Mutation {
    # 1. 아래에 createTokenOfPhone API의 요청 데이터 타입을 지정해 주세요.
    createTokenOfPhone(phone: String): String
  }
`;

const resolvers = {
  Query: {
    fetchBoards: (_, args) => {
      return [
        {
          number: 1,
          writer: "철수",
          title: "제목입니다",
          contents: "내용입니다",
        },
        {
          number: 2,
          writer: "영희",
          title: "좋은 날씨입니다",
          contents: "내용입니다",
        },
      ];
    },
  },

  Mutation: {
    createTokenOfPhone: (_, args) => {
      const phone = args.phone;
      const isValid = checkValidationPhone(phone);
      if (isValid) {
        const token = getToken();
        sendTokenToSMS(phone, token);
        return "인증완료";
      }
      return "인증실패";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(3000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
