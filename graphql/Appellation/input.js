'use strict'

const graphql = require('graphql');

module.exports = new graphql.GraphQLInputObjectType({
  name: 'AppellationInput',
  fields: () => ({
    id: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLInt),
      description: 'appellation id',
    },
    name: {
      type: graphql.GraphQLString,
    },
  })
});