"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Claim_Rewards", [
      {
        no_hp: "091234567890",
        rank: 1,
        session_month: 1,
        year: 2022,
        date_of_claim: new Date(), 
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Claim_Rewards", null, {});
  },
};
