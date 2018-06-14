# GraphQL Europe Workshop

[Berlin, June 14 2018](https://www.meetup.com/graphql-berlin/events/251440436/)

## Demo 3

In this demo we will build a Node.JS server, connect it to [Prisma](prisma.io) and implement all sorts of resolvers by using prisma bindings.

### Installation

```bash
# Clone the repo
git clone https://github.com/Makazone/graphqleu-2018-ws gql-eu-demo3

# Cd into it and instal deps
cd gql-eu-demo3 && yarn && yarn start
```

### Step 1

[Jump](https://github.com/Makazone/graphqleu-2018-ws#step-1)

### Step 2 (you are here ^^)

[Jump](https://github.com/Makazone/graphqleu-2018-ws/tree/prisma-init#step-2)

1.  Add Prisma if you don't have it already `yarn add -D prisma` or `yarn global add prisma`
2.  Copy your `prisma` folder [from Demo 2](https://github.com/alexedev/graphqleu-2018-ws/blob/master/prisma/datamodel.graphql)
3.  Deploy the updated model `yarn prisma deploy`
4.  Add prisma bindings `yarn add prisma-binding`
5.  Init Prisma in context & buckle up
