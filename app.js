'use strict'

const koa = require('koa')
const co = require('co')
const mount = require('koa-mount')
const graphqlHTTP = require('koa-graphql')
const graphql = require('graphql')
const graphSequel = require('graphql-sequelize')

const db = require('./models')

const app = koa();

const graphqlModel = require('./graphql');

let schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      position: {
        type: graphqlModel.Position.type,
        // args will automatically be mapped to `where`
        args: {
          id: {
            description: 'id of the position',
            type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
          },
          lat: {
            description: 'lat of the positon',
            type: graphql.GraphQLFloat,
          }
        },
        resolve: graphSequel.resolver(db.Position, {
          include: false // disable auto including of associations based on AST - default: true
        })
      }
    }
  })
});

app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
})));

co(function *(){
  const connection = yield db.sequelize.sync();
  return connection
}).then(function (connection) {
  if(connection){
    app.listen(3000);
    console.log('connected to database and listening on port 3000');
  }
}, function (err) {
  console.error(err.stack);
});
