import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';

import { schema } from './src/schema';

const graphqlSchema = schema;
const PORT = 8080;


const server = express();

server.use('/graphql', bodyParser.json(), graphqlExpress({schema: graphqlSchema}));
server.use('/graphiql', bodyParser.json(), graphiqlExpress({endpointURL: '/graphql'}));

server.listen(PORT, () => console.log('Running a GraphQL API server at localhost:8080/graphql'));