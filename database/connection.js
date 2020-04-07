require("dotenv").config({ path: "F:/Demon/GitHub/assessment-portal/.env" });
const Sequelize = require("sequelize");

module.exports = new Sequelize(
  "database_development",
  process.env.DBUSER,
  process.env.DBPASS,
  {
    host: 'covid19to-dev.cltywozqbkyh.us-east-2.rds.amazonaws.com',
    port: process.env.DBPORT,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);
