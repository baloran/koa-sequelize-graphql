'use strict'

const graphql = require('graphql');
const path = require('path');
const graphSequel = require('graphql-sequelize');

// Appellation
const appellation = require(path.join(__dirname, '../Appellation'));

// Model
const model = require(path.join(__dirname, '../../models'));


module.exports = new graphql.GraphQLInputObjectType({
  name: 'WineInput',
  fields: () => ({
    id: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLInt),
      description: 'vin id',
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
      type: graphql.GraphQLText,
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