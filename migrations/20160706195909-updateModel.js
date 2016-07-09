'use strict';

module.exports = {
  up: function (queryInterface, Sequelize, done) {
    queryInterface.addColumn('Wines', 'createdAt', Sequelize.DATE);
    queryInterface.addColumn('Wines', 'updatedAt', Sequelize.DATE);
    done();
  },

  down: function (queryInterface, Sequelize, done) {
    queryInterface.removeColumn('Wines', 'createdAt');
    queryInterface.removeColumn('Wines', 'updatedAt');
    done();
  }
};
