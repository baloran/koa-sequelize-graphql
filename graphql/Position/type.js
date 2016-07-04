'use strict'

const graphql = require('graphql');

module.exports = new graphql.GraphQLObjectType({
  name: 'Position',
  description: 'An position with lat, lng and timestamp',
  fields: () => ({
    id: {
      type: new graphql.GraphQLNonNull(graphql.GraphQLInt),
      description: 'The position of me.',
    },
    lat: {
      type: graphql.GraphQLFloat,
      description: 'latitude.',
    },
    lng: {
      type: graphql.GraphQLFloat,
      description: 'longitude.',
    },
  })
});