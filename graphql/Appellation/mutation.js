'use strict'

const graphql = require('graphql');
const path = require('path');

// Model
const db = require(path.join(__dirname, '../../models'));

// GraphQL | Sequelize
const graphSequel = require('graphql-sequelize');

module.exports = new graphql.GraphQLObjectType({
  name: 'appellationMutation',
  fields: () => ({
    getByName: {
      type: require('../type'),
      description: 'Get appellation By Name',
      args: {
        name: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) }
      },
      resolve: graphSequel.resolver(db.Wine, {
        include: false
      })
    }
  })
});