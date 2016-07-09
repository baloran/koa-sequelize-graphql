'use strict'

const graphql = require('graphql');
const path = require('path');
const graphSequel = require('graphql-sequelize');

// Appellation
const appellation = require(path.join(__dirname, '../Appellation'));

// Model
const db = require(path.join(__dirname, '../../models'));

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
      type: appellation.type,
      description: 'appellation of the wine.',
      resolve: (value) => {
        return new Promise((resolve, reject) => {
          db.Appellation.findById(value.appellation_id).then((appellation) => {
              console.log(appellation)
              resolve(appellation)
            }).catch((err) => {
              reject(err)
            })
        })
      }
    },
    status: {
      type: graphql.GraphQLString,
      description: 'status for reponse'
    }
  })
});