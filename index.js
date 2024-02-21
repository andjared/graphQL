const { ApolloServer, gql } = require('apollo-server');

//gql takes schema string and turn it into an object
//we have to return something from mutation
//customized scalar is customized value/container that is going to be used for a single value (like Date,email, url)

const typeDefs = gql`
	scalar Date
	"""
	An object that describes the characteristics of a ski day
	"""
	type SkiDay {
		"A ski day's unique identifier"
		id: ID!
		"The date that ski day occurred"
		date: Date!
		"The location where a ski day occurred"
		mountain: String!
		"The shape of snow was in when the ski day happened"
		conditions: Conditions
	}

	enum Conditions {
		POWDER
		HEAVY
		ICE
		THIN
	}

	input AddDayInput {
		date: Date!
		mountain: String!
		conditions: Conditions
	}

	type RemoveDayPayload {
		day: SkiDay!
		removed: Boolean
		totalBefore: Int
		totalAfter: Int
	}

	type Mutation {
		addDay(input: AddDayInput!): SkiDay
		removeDay(id: ID!): RemoveDayPayload!
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

//when customizing mocks always going to return data for specific type
const mocks = {
	Date: () => '1/2/2025',
	String: 'Some custom string',
};

const server = new ApolloServer({
	typeDefs,
	mocks,
});

server.listen().then(({ url }) => console.log(`Server running at ${url}`));
