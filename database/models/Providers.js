const Sequelize = require("sequelize");
const db = require("../connection");

module.exports = db.define("Providers", {
  email: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
});
