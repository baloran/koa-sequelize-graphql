'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Wines', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: Sequelize.STRING,
      price: Sequelize.DECIMAL,
      flavors: Sequelize.TEXT,
      bio: Sequelize.BOOLEAN,
      color: Sequelize.STRING,
      appellation_id: {
        type: Sequelize.INTEGER,
        references: 'Appellations',
        referencesKey: 'id',
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Wine');
  }
};
