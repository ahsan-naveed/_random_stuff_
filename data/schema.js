
import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

// building schema
const typeDefs = `

    type Friend {
        id: ID @unique
        firstName: String!
        lastName: String
        gender: Gender
        age: Int
        language: String
        email: String
        contacts: [Contact]
    }

    type Alien {
        id: ID
        firstName: String
        lastName: String
        planet: String
    }

    type Contact {
        firstName: String!
        lastName: String
        isFriend: Boolean
    }

    type Friends {
        friend: Friend
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }
    
    input FriendInput {
        id: ID @unique
        firstName: String!
        lastName: String
        gender: Gender
        age: Int
        language: String
        email: String
        contacts: [ContactInput]
    }

    input ContactInput {
        firstName: String!
        lastName: String
        isFriend: Boolean
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
        updateFriend(input: FriendInput): Friend
    }

    type Query {
        getFriend(id: ID): Friend
    }
`;

const schema = makeExecutableSchema({typeDefs, resolvers});

export { schema }