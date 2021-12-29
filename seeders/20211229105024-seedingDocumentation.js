"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Documentations",
      [
        {
          caption: "Peduli lingkungan untuk bumi yang lebih baik.",
          image:
            "https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          messages:
            "Sangat menyenangkan bisa berkontribusi untuk bumi. Semangat selalu dalam merawat bumi kita!",
          participant_id: 2,
          tanam_pohon_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          caption: "Tanam pohon untuk membantu bumi lebih sehat.",
          image:
            "https://cdn.gaya.id/dynamic/2019/12/19/225/o56A7HMXZb.png?w=500",
          messages:
            "Semangat Tanam Pohon untuk Papua yang lebih hijau. Mari bersama-sama tanam pohon membantu saudara kita di Papua!",
          participant_id: 1,
          tanam_pohon_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
