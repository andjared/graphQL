const { ApolloServer, gql } = require('apollo-server');

//gql takes schema string and turn it into an object
//we have to return something from mutation

const typeDefs = gql`
	type SkiDay {
		id: ID!
		date: String!
		mountain: String!
		conditions: Conditions
	}

	enum Conditions {
		POWDER
		HEAVY
		ICE
		THIN
	}

	input AddDayInput {
		date: String!
		mountain: String!
		conditions: Conditions
	}

	type Mutation {
		addDay(input: AddDayInput!): SkiDay
		removeDay(id: ID!): SkiDay!
	}

	type Query {
		totalDays: Int!
		allDays: [SkiDay!]!
	}
`;

//resolvers are functions that return data for the schema
// const resolvers = {};

//server instance - takes two args: typeDefs and resolvers
//for now mock resolvers - mock data for the schema

const server = new ApolloServer({
	typeDefs,
	mocks: true,
});

server.listen().then(({ url }) => console.log(`Server running at ${url}`));
