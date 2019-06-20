const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');

const typeDefs = gql`
    type Query{
        message: String!
    }
`

const resolvers = {
    Query: {
        message: () => 'This is a message!'
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen({ port: 5000 })
    .then(res => {
        console.log(`Server running at ${res.url}`);
    });