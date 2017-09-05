import express from 'express';
import cors from 'cors';
import env from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { seedIphoneModel, seedPresident } from './seed';
import schema from './schema';
import Connectors from './connectors';

env.config();

const PORT = 8080;
const app = express();
app.use(cors());

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, (err) => {
  if (err) {
    return err;
  }
  return true;
});
mongoose.connection
  .once('open', () => console.log('Connected to MongoDB instance.'))
  .on('error', error => console.log('Error connecting to MongoDB:', error));

seedIphoneModel();
seedPresident();

app.use(bodyParser.json());
app.use('/graphql', graphqlExpress({
  schema,
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
