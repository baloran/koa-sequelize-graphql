'use strict'

const graphql = require('graphql');

module.exports = new graphql.GraphQLObjectType({
  name: 'Appellation',
  description: 'the appellation',
  fields: () => ({
    id: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLInt),
      description: 'the id of the appellation',
    },
    name: {
      type: graphql.GraphQLString,
      description: 'Name of the appellation'
    },
  })
});