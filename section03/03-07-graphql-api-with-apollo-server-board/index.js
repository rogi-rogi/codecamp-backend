import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  type MyResult {
    number: Int
    writer: String
    title: String
    contents: String
  }

  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  type Query {
    # resolvers에서 반환되는 값들의 type또한 지정해주어야 한다.
    # fetchBoards: MyResult # 객체 1개를 의미!
    fetchBoards: [MyResult] # 배열 안에 객체 1개 이상을 의미!
  }

  type Mutation {
    # createBoard(writer: String, title: String, contents: String): String => 입력값을 낱개로 받아오는 것을 의미
    createBoard(createBoardInput: CreateBoardInput!): String # => 입력값을 객체로 받아오는 것을 의미
  }
`;

const resolvers = {
  Query: {
    // get.boards
    fetchBoards: (parent, args, context, info) => {
      // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
      const result = [
        {
          number: 1,
          writer: "철수",
          title: "제목입니다~~",
          contents: "내용이에요@@@",
        },
        {
          number: 2,
          writer: "영희",
          title: "영희 제목입니다~~",
          contents: "영희 내용이에요@@@",
        },
        {
          number: 3,
          writer: "훈이",
          title: "훈이 제목입니다~~",
          contents: "훈이 내용이에요@@@",
        },
      ];

      // 2. 꺼내온 결과 응답 주기
      return result; // res.send와 동일
    },
  },

  Mutation: {
    createBoard: (_, args) => {
      console.log(args);
      console.log("=========================");
      console.log(args.createBoardInput.writer);
      console.log(args.createBoardInput.title);
      console.log(args.createBoardInput.contents);
      return "게시물 등록에 성공하였습니다.";
    },
  },
};

const app = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true, // 모든 사이트 허용하고 싶을 때
  // cors: { origin: ["https://naver.com", "https://daum.net"] } // 특정 사이트만 지정하고 싶을 때
});
startStandaloneServer(app);
