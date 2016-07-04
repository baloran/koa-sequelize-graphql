'use strict'

const Sequelize = require('sequelize');

module.exports = function (sequelize, Sequelize) {
  const Wine = sequelize.define('Wine', {
    name: Sequelize.STRING,
    price: Sequelize.DECIMAL,
    flavors: Sequelize.TEXT,
    bio: Sequelize.BOOLEAN,
    color: Sequelize.STRING,
    appellation_id: {
      type: Sequelize.INTEGER,
      references: 'Appellation',
      referencesKey: 'id',
    },
  }, {
    classMethods: function (models) {
      Wine.belongsTo(models.Appellation, {
        foreignKey: 'id',
      });
    },
  });

  return Wine;
};
