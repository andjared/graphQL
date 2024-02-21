const { ApolloServer, gql } = require('apollo-server');

//gql takes schema string and turn it into an object
const typeDefs = gql``;

//resolvers are functions that return data for the schema
// const resolvers = {};

//server instance - takes two args: typeDefs and resolvers
//for now mock resolvers - mock data for the schema

const server = new ApolloServer({
	typeDefs,
	mocks: true,
});

server.listen().then(({ url }) => console.log(`Server running at ${url}`));
