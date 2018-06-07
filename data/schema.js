/*
** NOTE: Delete mutations will not return the deleted object
** as it is no longer exists in the database instead return 
** a success message
*/ 

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

    input AlienInput {
        id: ID @unique
        firstName: String!
        lastName: String
        planet: String
    }

    input ContactInput {
        firstName: String!
        lastName: String
        isFriend: Boolean
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
        updateFriend(input: FriendInput): Friend
        deleteFriend(id: ID!): String
        createAlien(input: AlienInput): Alien
        updateAlien(input: AlienInput): Alien
        deleteAlien(id: ID!): String
    }

    type Query {
        getFriend(id: ID!): Friend
        getFriends: [Friend]
        getAliens: [Alien]
    }
`;

// fast mapping of type definitions and resolvers
const schema = makeExecutableSchema({typeDefs, resolvers});

export { schema }