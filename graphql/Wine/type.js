'use strict'

const graphql = require('graphql');
const path = require('path');
const graphSequel = require('graphql-sequelize');

// Appellation
const appellation = require(path.join(__dirname, '../Appellation'));

// Model
const model = require(path.join(__dirname, '../../models'));

module.exports = new graphql.GraphQLObjectType({
  name: 'Wine',
  description: 'A wine',
  fields: () => ({
    id: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLInt),
      description: 'the id of the wine',
    },
    name: {
      type: graphql.GraphQLString,
      description: 'name of the wine.',
    },
    price: {
      type: graphql.GraphQLFloat,
      description: 'price of the wine.',
    },
    flavors: {
      type: graphql.GraphQLString,
      description: 'flavors of the wine.',
    },
    bio: {
      type: graphql.GraphQLBoolean,
      description: 'Wine is bio ?',
    },
    color: {
      type: graphql.GraphQLString,
      description: 'color of the wine.',
    },
    appellation_id: {
      type: new graphql.GraphQLList(appellation.type),
      resolve: graphSequel.resolver(model.Appellation, {
        separate: true // load seperately, disables auto including - default: false
      })
    }
  })
});