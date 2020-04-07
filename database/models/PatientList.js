const Sequelize = require("sequelize");
const db = require("../connection");

module.exports = db.define("PatientListDev", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  timestamp: {
    type: "TIMESTAMP",
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    allowNull: false,
  },
  contact_number: {
    type: Sequelize.STRING(10),
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM("waiting", "calling", "unavailable", "done"),
    defaultValue: "waiting",
    allowNull: false,
  },
});
