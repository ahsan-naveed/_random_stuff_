
/*
** NOTE: Delete mutations will not return the deleted object
** as it is no longer exists in the database instead return 
** a success message
*/ 

import { makeExecutableSchema, addMockFunctionsToSchema} from 'graphql-tools';

import { resolvers } from './resolvers';

// building schema
export const typeDefs = `
    type Contact {
        id: ID!
        firstName: String
        lastName: String
    }

    input ContactInput {
        id: ID! @unique
        firstName: String!
        lastName: String
    }

    type Query {
        contacts: [Contact]
    }

    type Mutation {
        createContact(input: ContactInput): Contact
    }
`;

// fast mapping of type definitions and resolvers
const schema = makeExecutableSchema({typeDefs, resolvers});

// addMockFunctionsToSchema({schema});


export { schema }