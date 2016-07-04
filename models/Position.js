const Sequelize = require('sequelize');

module.exports = function (sequelize, Sequelize) {
  return sequelize.define('Position', {
    lat: Sequelize.DOUBLE,
    lng: Sequelize.DOUBLE,
  });
};
