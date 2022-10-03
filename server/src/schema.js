const { gql } = require("apollo-server");

const typeDefs = gql`
	type Query {
		"Query to get tracks for home"
		tracksForHome: [Track!]!
	}

	"a group of modules about a thing"
	type Track {
		id: ID!
		title: String!
		author: Author!
		thumbnail: String
		length: Int
		modulesCount: Int
	}
	"the author of a track"
	type Author {
		id: ID!
		name: String!
		photo: String
	}
`;

module.exports = typeDefs;
