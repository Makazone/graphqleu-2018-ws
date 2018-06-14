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

### Step 1 (you are here ^^)

[Jump](https://github.com/Makazone/graphqleu-2018-ws#step-1-you-are-here-)

Here we have a simple GraphQL Server with an in-memory DB. It uses [graphql-yoga](https://github.com/prismagraphql/graphql-yoga).

#### Sample Queries

```graphql
query {
  posts(searchString: "QL") {
    id
    title
    content
    published
  }
}
```

```graphql
query {
  post(id: "post-0") {
    id
    title
    content
    published
  }
}
```

```graphql
mutation {
  createDraft(
    title: "GraphQL Bindings"
    content: "Reuse and compose GraphQL APIs"
  ) {
    id
    published
  }
}
```

```graphql
mutation {
  publish(id: "post-0") {
    id
    published
  }
}
```

```graphql
mutation {
  deletePost(id: "post-0") {
    id
    title
    content
    published
  }
}
```
