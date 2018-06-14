const { GraphQLServer } = require("graphql-yoga");
const { Prisma } = require("prisma-binding");

const resolvers = {
  Query: {
    posts: (_, args, context, info) => {
      return context.db.query.posts(
        {
          where: {
            OR: [
              {
                title_contains: args.searchString
              },
              {
                content_contains: args.searchString
              }
            ]
          }
        },
        info
      );
    },
    post: (_, args, context, info) => {
      return context.db.query.post(
        {
          where: {
            id: args.id
          }
        },
        info
      );
    }
  },
  Mutation: {
    createDraft: (_, args, context, info) => {
      return context.db.mutation.createPost(
        {
          data: {
            title: args.title,
            content: args.content
          }
        },
        info
      );
    },
    publish: (_, args, context, info) => {
      return context.db.mutation.updatePost(
        {
          where: {
            id: args.id
          },
          data: {
            published: true
          }
        },
        info
      );
    },
    deletePost: (_, args, context, info) => {
      return context.db.mutation.deletePost(
        {
          where: {
            id: args.id
          }
        },
        info
      );
    }
  },
  Subscription: {
    postPublished: {
      subscribe: async (parent, args, ctx, info) => {
        try {
          return ctx.db.subscription.post({}, info);
        } catch (e) {
          console.log(e);
        }
      }
      //   resolve: (payload, args, context, info) => {
      //     // Manipulate and return the new value
      //     console.log(payload.node);
      //     return payload.node;
      //   }
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
