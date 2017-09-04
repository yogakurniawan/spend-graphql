import express from 'express';
import bodyParser from 'body-parser';
import Mongoose from 'mongoose';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { seedIphoneModel, seedPresident } from './seed';
import Schema from './schema';
import Resolvers from './resolvers';
import Connectors from './connectors';

const PORT = 8080;
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

Mongoose.Promise = global.Promise;
Mongoose.connect('mongodb://localhost:27017/admin', (err) => {
  if (err) {
    return err;
  }
  return true;
});

seedIphoneModel();
seedPresident();

const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers,
});

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema: executableSchema,
  context: {
    constructor: Connectors,
  },
  rootValue: 'Hello World',
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.listen(PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${PORT}/graphql`
));
