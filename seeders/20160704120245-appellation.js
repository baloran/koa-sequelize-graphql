'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Appellations', [{
      id: 0,
      name: 'Bourgogne',
    }, {
      id: 1,
      name: 'Corbières',
    }, {
      id: 2,
      name: 'Côtes de Gascogne',
    }, {
      id: 3,
      name: 'Pouilly-fumé',
    },]);
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
