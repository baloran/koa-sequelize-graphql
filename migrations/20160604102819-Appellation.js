'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Appellations', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: Sequelize.STRING
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Appellation');
  }
};
