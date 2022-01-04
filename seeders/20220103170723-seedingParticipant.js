"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Participants",
      [
        {
          name: "Ananda Raisa",
          no_hp: "08123456789",
          number_of_trees: 5,
          user_id: 1,
          tanam_pohon_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jonathan Leo",
          no_hp: "08987654321",
          number_of_trees: 3,
          user_id: 2,
          tanam_pohon_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Participants", null, {});
  },
};
