import express from 'express';
import graphqlHTTP from 'express-graphql'
import randomBytes from 'crypto';

import { schema } from './data/schema';

const app = express()

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!')
})

// since we have executable schema no need of rootValue
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(8080, () => console.log('Running a GraphQL API server at localhost:8080/graphql'))