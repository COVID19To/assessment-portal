"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.describeTable("PatientListDev").then((data) => {
      // creates table if it does not exist
      if (data && data.length && Object.keys(data[0]).length)
        return Promise.resolve();
      return queryInterface.createTable("PatientListDev", {
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
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      });
    }),

  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable("PatientListDev"),
};
