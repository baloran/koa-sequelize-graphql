'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Wines', [{
      'name': 'Pommard 1er Cru Bertins',
      'price': 55,
      'flavors': 'Puissance et velouté.',
      'bio': true,
      'color': 'red',
      'appellation_id': 0, // Bourgogne
    },{
      'name': 'Les Ollieux Romanis',
      'price': 7,
      'flavors': 'La terre des Ollieux a connu les premières traces de vie humaine avec l’arrivée des romains.',
      'bio': true,
      'color': 'red',
      'appellation_id': 1, // Corbières
    },{
      'name': 'L\'Eté Gascon',
      'price': 6.90,
      'flavors': 'Vin fruité et doux. Très bien pour l\'apéritif.',
      'bio': true,
      'color': 'white',
      'appellation_id': 2, // Côtes de Gascogne
    },{
      'name': 'Silex Dagueneau',
      'price': 101.5,
      'flavors': 'Grand Sauvignon.',
      'bio': true,
      'color': 'white',
      'appellation_id': 3, // Pouilly-fumé
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
