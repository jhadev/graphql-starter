const gql = require('graphql-tag');
const { ApolloServer } = require('apollo-server');

const PORT = 4000;

// define schema
const typeDefs = gql`
  type User {
    # email not null !
    email: String!
    avatar: String
    # array of Users will always be an array
    friends: [User!]!
  }

  # type needs a query - always Query type

  type Query {
    me: User!
    friends: [User]!
  }
`;
// resolvers have to match query fields

// resolvers should respect your schema

// resolvers can be async and can retrieve data from anywhere
// can mix and match databases and merge data, even from external sources.
const resolvers = {
  Query: {
    me() {
      return {
        email: 'joshappeldev@gmail.com',
        avatar: 'https://f4.bcbits.com/img/a1245437977_10.jpg',
        friends: []
      };
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen(PORT).then(() => console.log(`listening on port ${PORT}`));
