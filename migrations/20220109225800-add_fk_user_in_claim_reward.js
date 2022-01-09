"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("Claim_Rewards", {
      fields: ["user_id"],
      type: "foreign key",
      name: "fk_user_id_in_Claim_Rewards",
      references: {
        //Required field
        table: "Users",
        field: "user_id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint(
      "Claim_Rewards",
      "fk_user_id_in_Claim_Rewards",
      {}
    );
  },
};