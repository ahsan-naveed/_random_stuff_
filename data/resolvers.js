import idMaker from '../../utils';

// in mem db
class Friend {
    constructor(id, {firstName, lastName, gender, age, language, email, contacts}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.language = language;
        this.email = email;
        this.gender = gender;
        this.age = age;
        this.contacts = contacts;
    }
}

const friendDatabase = {}
const gen = idMaker()

// create resolver for schema - would fetch the actual data from DB 
// resolver map
export const resolvers = {
    Query: {
        getFriend: ({
            id
        }) => {
            return new Friend(id, friendDatabase[id])
        }
    },
    Mutation: {
        createFriend: ({
            input
        }) => {
            let id = gen.next().value
            friendDatabase[id] = input;
            return new Friend(id, input);
        }
    }
};
