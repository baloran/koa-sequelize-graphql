'use strict';

module.exports = {
  up: function (queryInterface, Sequelize, done) {
    queryInterface.addColumn('Appellations', 'createdAt', Sequelize.DATE);
    queryInterface.addColumn('Appellations', 'updatedAt', Sequelize.DATE);
    done();
  },

  down: function (queryInterface, Sequelize, done) {
    queryInterface.removeColumn('Appellations', 'createdAt');
    queryInterface.removeColumn('Appellations', 'updatedAt');
    done();
  }
};
