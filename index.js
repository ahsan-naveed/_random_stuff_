import express from 'express';
import graphqlHTTP from 'express-graphql'
import randomBytes from 'crypto';

import schema from './schema';
import resolvers from './resolvers';

const app = express()

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!')
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen(8080, () => console.log('This app is running on localhost:8080/graphql'))