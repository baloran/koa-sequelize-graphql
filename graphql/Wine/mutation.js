'use strict'

const graphql = require('graphql');
const path = require('path');

// Model
const db = require(path.join(__dirname, '../../models'));

// GraphQL | Sequelize
const graphSequel = require('graphql-sequelize');

module.exports = new graphql.GraphQLObjectType({
  name: 'wineMutation',
  fields: () => ({
    getAll: {
      type: new graphql.GraphQLList(require(path.join(__dirname, '../../graphql/Wine/type'))),
      description: 'get all wines',
      args: {
        name: { 
          type: graphql.GraphQLString 
        },
        limit: {
          type: graphql.GraphQLInt
        },
        order: {
          type: graphql.GraphQLString
        }
      },
      resolve: graphSequel.resolver(db.Wine)
    }
  })
});