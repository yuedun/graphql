var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String,
    world: String,
    yes: String
  }
`);

var root = {
  hello: () => 'Hello world!',
  world: () => 'hi world',
  yes:()=> 'sdlkgjdo'
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(3000, () => console.log('Now browse to localhost:4000/graphql'));