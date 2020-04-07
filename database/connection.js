require('dotenv').config()
const Sequelize = require('sequelize');

module.exports = new Sequelize("database_development", process.env.DBUSER, process.env.DBPASS, {
  host: process.env.DBHOST,
  port: process.env.DBPORT,
  dialect: 'mysql'
});