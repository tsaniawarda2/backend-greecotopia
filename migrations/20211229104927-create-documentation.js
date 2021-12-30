"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Documentations", {
      documentation_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      caption: {
        allowNull: false,
        type: Sequelize.STRING(40),
      },
      image_url: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      messages: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      participant_id: {
        type: Sequelize.INTEGER,
      },
      tanam_pohon_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Documentations");
  },
};
