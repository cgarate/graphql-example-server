const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//Allow cross domain requests
app.use(cors());

// Connect to mongoDB
mongoose.connect('mongodb://gqlAdmin:test123456@ds147723.mlab.com:47723/gql-garate');
mongoose.connection.once('open', () => {
  console.log('Connected to database')
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000, () => {
  console.log("listening on port 4000");
});

