import { buildSchema } from 'graphql';

// building schema
const schema = buildSchema(`

    type Friend {
        id: ID @unique
        firstName: String!
        lastName: String
        gender: String
        language: String
        email: String
    }

    type Friends {
        friend: Friend
    }
    
    input FriendInput {
        id: ID @unique
        firstName: String!
        lastName: String
        gender: String
        language: String
        email: String
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
    }

    type Query {
        getFriend(id: ID): Friend
    }
`)

export default schema;
