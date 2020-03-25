const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

var schema = buildSchema(`
	type Query {
		hello: String,
		world: String,
		yes: String,
		no(name:String): String
	}
`);

var root = {
	hello: () => 'Hello world!',
	world: () => 'hi world',
	yes: () => 'yes!',
	no: (name) => {
		console.log(name);
		return name.name;
	}
};

var app = express();
app.use('/', graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true,
}));

app.listen(3000, () => console.log('Now browse to localhost:3000/graphql'));