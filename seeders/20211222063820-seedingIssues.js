"use strict";

const data = require("../data/issues.json");

const dataIssues = [];

data.forEach((issue) => {
  const temp = {
    title: issue.title,
    summary: issue.summary,
    description: issue.description,
    author_name: issue.author_name,
    image_url: issue.image_url,
    likes: issue.likes,
    createdAt: new Date(),
    updatedAt: new Date(),
    tag_id: issue.tag_id,
    forum_id: issue.forum_id,
  };
  dataIssues.push(temp);
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Issues", dataIssues, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Issues", null, {});
  },
};
