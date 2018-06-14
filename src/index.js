const { GraphQLServer } = require("graphql-yoga");
const { Prisma } = require("prisma-binding");

const resolvers = {
  Query: {
    info: () => `This is the API for a simple blogging application.`,
    posts: (_, args) => {
      return null;
    },
    post: (_, args) => {
      return null;
    }
  },
  Mutation: {
    createDraft: (_, args) => {
      return null;
    },
    publish: (_, args) => {
      return null;
    },
    deletePost: (_, args) => {
      return null;
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: "src/generated/prisma.graphql",
      endpoint: "https://eu1.prisma.sh/makar-7af142/my-blog/dev"
    })
  })
});
server.start(() =>
  console.log(`GraphQL server is running on http://localhost:4000`)
);
