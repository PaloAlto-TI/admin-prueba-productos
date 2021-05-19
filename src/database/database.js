const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://andres:qwerty1234@204.2.195.89:31400/DB_PALOALTO_V1')

module.exports = sequelize;