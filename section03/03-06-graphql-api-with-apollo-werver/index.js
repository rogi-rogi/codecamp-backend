import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
    type Query {
        test: String
        test2: String
    }
`;

// @apollo/server
const resolvers = {
  Query: {
    test: () => {
      return "zxcvㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹzxvzxㄴ";
    },
  },
};

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

startStandaloneServer(server);
