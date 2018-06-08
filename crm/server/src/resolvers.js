const contacts = [
    {
        id: 1,
        firstName: 'Ahsan',
        lastName: 'Naveed'
    },
    {
        id: 2,
        firstName: 'Azam',
        lastName: 'Javed'
    },
    {
        id: 3,
        firstName: 'Samuel',
        lastName: 'Gee'
    }
];

export const resolvers = {
    Query: {
        contacts: () => {
            return contacts;
        }
    },

    Mutation: {
        createContact: (root, args) => {
            contacts.push(
                {
                    id: contacts.length + 1,
                    firstName: args.firstName,
                    lastName: args.lastName
                }
            )
            return contacts[contacts.length - 1]
        }
    }
}