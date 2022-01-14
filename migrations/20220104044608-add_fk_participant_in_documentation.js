"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("Documentations", {
      fields: ["participant_id"],
      type: "foreign key",
      name: "fk_participant_id_in_Documentations",
      references: {
        //Required field
        table: "Participants",
        field: "participant_id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint(
      "Documentations",
      "fk_participant_id_in_Documentations",
      {}
    );
  },
};
