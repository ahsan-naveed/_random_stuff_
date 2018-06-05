import express from 'express';
import graphqlHTTP from 'express-graphql'
import { randomBytes } from 'crypto';

import schema from './schema';

const app = express()

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!')
})

// in mem db
class Friend {
    constructor(id, {firstName, lastName, gender, language, email}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.language = language;
        this.email = email;
        this.gender = this.gender;
        
    }
}

const friendDatabase = {}

// create resolver for schema - would fetch the actual data from DB 
const root = {
    friend: () => {
        return {
            id: "2309799",
            firstName: "Ahsan",
            lastName: "Naveed",
            emails: [
                {email: "anaveed at sfu"},
                {email: "anaveed at ubc"},
                {email: "anaveed at mit"}
            ],
            language: "en",
            gender: "M",
            email: "anaveed at ubc"
        }
    },
    friends: () => {
        return Object.values(friendDatabase);
    },
    createFriend: ({input}) => {
        let id = randomBytes(10).toString('hex');
        friendDatabase[id] = input;
        return new Friend(id, input);
    }
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8080, () => console.log('This app is running on localhost:8080/graphql'))