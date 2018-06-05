import express from 'express';
import graphqlHTTP from 'express-graphql'

import schema from './schema';

const app = express()

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!')
})

// create resolver for schema
const root = {friend: () => {
    return {
        id: "2309799",
        firstName: "Ahsan",
        lastName: "Naveed",
        email: "anaveed at sfu",
        language: "en",
        gender: "M"
    }
}};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8080, () => console.log('This app is running on localhost:8080/graphql'))