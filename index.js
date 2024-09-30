import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { graphqlHTTP } from 'express-graphql';

import { makeExecutableSchema } from '@graphql-tools/schema';
import typeDefs from './schema/typeDefs.js';
import resolvers from './schema/resolvers.js';

const schema = new makeExecutableSchema({
  typeDefs,
  resolvers,
});
 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const client = mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
