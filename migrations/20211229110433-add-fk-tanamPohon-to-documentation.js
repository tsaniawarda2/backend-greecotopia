"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("Documentations", {
      fields: ["tanam_pohon_id"],
      type: "foreign key",
      name: "fk_tanam_pohon_id_in_Documentations",
      references: {
        //Required field
        table: "TanamPohons",
        field: "tanam_pohon_id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint(
      "Documentations",
      "fk_tanam_pohon_id_in_Documentations",
      {}
    );
  },
};
