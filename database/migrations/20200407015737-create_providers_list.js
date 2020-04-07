"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.describeTable("Providers").then((data) => {
      // creates table if it does not exist
      if (data && data.length && Object.keys(data[0]).length)
        return Promise.resolve();
      return queryInterface.createTable("Providers", {
        email: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      });
    }),

  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable("Providers"),
};
