import { buildSchema } from 'graphql';

// building schema
const schema = buildSchema(`

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
    }

    type Query {
        getFriend(id: ID): Friend
    }
`)

export default schema;
