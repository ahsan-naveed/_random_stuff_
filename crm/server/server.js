import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';

import { schema } from './src/schema';

const graphqlSchema = schema;
const PORT = 8080;


const server = express();

// takes care of any cross-origin issues when we call the server from 3000
server.use('*', cors({origin: 'http://localhost:3000'}));

server.use('/graphql', bodyParser.json(), graphqlExpress({schema: graphqlSchema}));
server.use('/graphiql', bodyParser.json(), graphiqlExpress({endpointURL: '/graphql'}));

server.listen(PORT, () => console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`));