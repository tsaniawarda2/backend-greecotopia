"use strict";
const { hashPassword } = require("../helpers/bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          fullname: "Ananda Raisa",
          email: "anarai@gmail.com",
          username: "anarai123",
          password: hashPassword("Anar4!23"),
          image_url:
            "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
          background_url:
            "https://images.unsplash.com/photo-1602615576820-ea14cf3e476a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZsb3dlcnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
          role_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Jonathan Leo",
          email: "leo456@gmail.com",
          username: "jojO4567",
          password: hashPassword("j0Lo_345"),
          image_url:
            "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJveXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
          background_url:
            "https://images.unsplash.com/photo-1468581264429-2548ef9eb732?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2VhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
          points: 1000,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
