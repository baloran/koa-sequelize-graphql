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
    addWine: {
      type: require(path.join(__dirname, '../../graphql/Wine/type')),
      description: 'Create a wine',
      args: {
        wine: {type: new graphql.GraphQLNonNull(require(path.join(__dirname, '../../graphql/Wine/input')))}
      },
      resolve: (root, { wine }) => {
        return new Promise((resolve, reject) => {
          db.Wine
            .create(wine)
            .then((model) => {
              let m = model.toJSON()
              m.status = 'ok'
              resolve(model.get({
                plain: true
              }));
            }).catch((err) => {
              reject(err);
            });
        });
      }
    },
    deleteWine: {
      type: require(path.join(__dirname, '../../graphql/Wine/type')),
      description: 'Delete a wine',
      args: {
        id: { type: new graphql.GraphQLNonNull(graphql.GraphQLInt) }
      },
      resolve: (value, { id }) => {
        return new Promise((resolve, reject) => {
          db.Wine.findById(id).then((model) => {
            if (!model) {
              model = {}
              model.status = "Not found";
              resolve(model);
            }
            model.destroy()
            resolve('done');
          }).catch((err) => {
            reject(err);
          });
        })
      }
    },
    updateWine: {
      type: require(path.join(__dirname, '../../graphql/Wine/type')),
      description: 'Update a Wine',
      args: {
        wine: {type: new graphql.GraphQLNonNull(require(path.join(__dirname, '../../graphql/Wine/input')))}
      },
      resolve: (value, {wine}) => {
        return new Promise((resolve, reject) => {
          db.Wine.findById(wine.id).then((model) => {
            if (!model) {
              model = {}
              model.status = "Not found";
              resolve(model);
            }
            model.update(wine).then((w) => {
              resolve(w)
            })
          })
        })
      }
    }
  })
});