const Sequelize = require('sequelize');

module.exports = function (sequelize, Sequelize) {
  const Appellation = sequelize.define('Appellation', {
    name: Sequelize.STRING,
  }, {
    classMethods: function (models) {
      Appellation.hasMany(models.Wine, {
        foreignKey: 'appellation_id',
      });
    },
  });

  return Appellation;
};
