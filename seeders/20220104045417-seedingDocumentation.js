"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Documentations",
      [
        {
          caption: "Peduli lingkungan untuk bumi yang lebih baik.",
          image_url:
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
          image_url:
            "https://cdn.gaya.id/dynamic/2019/12/19/225/o56A7HMXZb.png?w=500",
          messages:
            "Semangat Tanam Pohon untuk Papua yang lebih hijau. Mari bersama-sama tanam pohon membantu saudara kita di Papua!",
          participant_id: 1,
          tanam_pohon_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          caption: "Menanam pohon untuk bumiku",
          image_url:
            "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1013&q=80",
          messages: "Sangat menyenangkan bisa berpartisipasi dikegiatan ini",
          participant_id: 2,
          tanam_pohon_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          caption: "Hijaukan bumi dengan pohon kita",
          image_url:
            "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
          messages:
            "Kegiatan ini sangat positif dan harus diperluas lagi, semangat!",
          participant_id: 2,
          tanam_pohon_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          caption: "Jakarta akan hijau dengan pohon kami",
          image_url:
            "https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          messages: "Semoga dengan pohon ini bisa membawa dampak positif",
          participant_id: 2,
          tanam_pohon_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          caption: "",
          image_url:
            "https://images.unsplash.com/photo-1611843467160-25afb8df1074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          messages: "",
          participant_id: 2,
          tanam_pohon_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          caption: "",
          image_url: "",
          messages:
            "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          participant_id: 1,
          tanam_pohon_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          caption: "Serunya kegiatan tanam pohon",
          image_url:
            "https://images.unsplash.com/photo-1631401551847-78450ef649d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          messages:
            "Seru sekali, saya sangat senang saat mengikuti kegiatan ini",
          participant_id: 1,
          tanam_pohon_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Documentations", null, {});
  },
};
