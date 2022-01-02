"use strict";
const data = require("../data/tanam-pohon.json");

const dataTanamPohon = [];

data.forEach((tanamPohon) => {
  const temp = {
    title: tanamPohon.title,
    image_url: tanamPohon.image_url,
    description: tanamPohon.description,
    location: tanamPohon.location,
    date: tanamPohon.date,
    time: tanamPohon.time,
    reward_point: tanamPohon.reward_point,
    due_date: tanamPohon.date,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  dataTanamPohon.push(temp);
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Tanam_Pohons", dataTanamPohon, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Tanam_Pohons", null, {});
  },
};
