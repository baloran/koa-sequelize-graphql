'use strict'

const koa = require('koa');
const co = require('co');
const mount = require('koa-mount');

const db = require('./models');

// CORS
const cors = require('kcors');

// GraphQL Needed
const graphqlHTTP = require('koa-graphql');
const graphql = require('graphql');
const graphSequel = require('graphql-sequelize');
const graphqlModel = require('./graphql');

// Koa APP
const app = koa();

/**
 * Schema Database
 * TODO:
 *   - Split this part of code
 */
let schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      wine: {
        type: graphqlModel.Wine.type,
        // args will automatically be mapped to `where`
        args: {
          id: {
            description: 'id of the wine',
            type: graphql.GraphQLInt
          },
          name: {
            description: 'name of the wine',
            type: graphql.GraphQLString
          }
        },
        resolve: graphSequel.resolver(db.Wine, {
          include: false // disable auto including of associations based on AST - default: true
        })
      },
      appellation: {
        type: graphqlModel.Appellation.type,
        args: {
          id: {
            description: 'id of the appellation',
            type: graphql.GraphQLInt
          },
          name: {
            description: 'name of the appellation',
            type: graphql.GraphQLString
          }
        },
        resolve: graphSequel.resolver(db.Appellation, {
          include: false
        })
      }
    },
  }),
  mutation: graphqlModel.Wine.mutation
});

/**
 * CORS SUPPORT
 * origin: *
 * allowMethods: GET,HEAD,PUT,POST,DELETE
 */
app.use(cors());

/**
 * Mount graphQL route with schema
 */
app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
})));

/**
 * Start the application
 * Test if DB is synchronized and Listen on port 3000
 */
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
