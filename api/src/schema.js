const { gql } = require('apollo-server');

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    # pets: [Pet!]!
  }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String!
    img: String!
    buddies: [Pet]
  }

  # input type

  input PetInput {
    name: String
    type: String
  }
  # ref input type in query and add it to resolvers
  type Query {
    # optionally include a pet input
    # use ! to always expect it
    pets(input: PetInput): [Pet]!
    pet(input: PetInput): Pet
  }
`;

module.exports = typeDefs;
