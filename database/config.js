require("dotenv").config({ path: "F:/Demon/GitHub/assessment-portal/.env" });

module.exports = {
  development: {
    username: process.env.DBUSER,
    password: process.env.DBPASS,
    database: "production",
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    dialect: "mysql",
  },
};
