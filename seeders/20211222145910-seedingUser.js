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
          total_trees: 35,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Devi Ayu Lestari",
          email: "devi@gmail.com",
          username: "devi123",
          password: hashPassword("Devi_123"),
          image_url:
            "https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          background_url:
            "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
          points: 1500,
          total_trees: 15,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Tsania Warda",
          email: "tsania@gmail.com",
          username: "TsaniaWarda2",
          password: hashPassword("Tsania_123"),
          image_url:
            "https://images.unsplash.com/photo-1534557098137-bdd9ead94c34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80",
          background_url:
            "https://images.unsplash.com/reserve/HgZuGu3gSD6db21T3lxm_San%20Zenone.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          points: 1200,
          total_trees: 20,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Rizky Maulita",
          email: "rizkyMaulita@gmail.com",
          username: "litha000",
          password: hashPassword("Litha_123"),
          image_url:
            "https://images.unsplash.com/photo-1535015682692-488ffba3f84a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=842&q=80",
          background_url:
            "https://images.unsplash.com/photo-1460295956739-9e21c5aabf8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=904&q=80",
          points: 950,
          total_trees: 10,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Wikal Pratama",
          email: "wikalP@gmail.com",
          username: "wpratama123",
          password: hashPassword("Wikal_123"),
          image_url:
            "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          background_url:
            "https://images.unsplash.com/photo-1459292414836-763d35c7ae4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          points: 900,
          total_trees: 30,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Arvel Gavrilla",
          email: "arvel@gmail.com",
          username: "arvel123",
          password: hashPassword("Arvel_123"),
          image_url:
            "https://images.unsplash.com/photo-1534471770828-9bde524ee634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          background_url:
            "https://images.unsplash.com/photo-1475912383998-112140380034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80",
          points: 800,
          total_trees: 5,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Salfa Ayu",
          email: "salfa@gmail.com",
          username: "salfa123",
          password: hashPassword("Salfa_123"),
          image_url:
            "https://images.unsplash.com/photo-1534436828370-d7b0bd2a2360?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
          background_url:
            "https://images.unsplash.com/photo-1528729975821-0095db1daffd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          points: 750,
          total_trees: 15,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Diki Aryo",
          email: "diki@gmail.com",
          username: "diki123@gmail.com",
          password: hashPassword("Diki_123"),
          image_url:
            "https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          background_url:
            "https://images.unsplash.com/10/caroline_sada_landscape.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          points: 600,
          total_trees: 5,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Avina Yustriani",
          email: "avina@gmail.com",
          username: "avina123",
          password: hashPassword("avina_123"),
          image_url:
            "https://images.unsplash.com/photo-1547527392-bd5d50305ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          background_url:
            "https://images.unsplash.com/photo-1518195722641-82e8dd51eca4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          points: 550,
          total_trees: 10,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Lintang",
          email: "lintang@gmail.com",
          username: "lintang123",
          password: hashPassword("Lintang_123"),
          image_url:
            "https://images.unsplash.com/photo-1526835746352-0b9da4054862?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          background_url:
            "https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
          points: 500,
          total_trees: 35,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Fadilla Miftahul",
          email: "fadilla@gmail.com",
          username: "fadilla123",
          password: hashPassword("Fadilla_123"),
          image_url:
            "https://images.unsplash.com/photo-1559595500-e15296bdbb48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
          background_url:
            "https://images.unsplash.com/photo-1565118531796-763e5082d113?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          points: 450,
          total_trees: 5,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Diar Ihza",
          email: "diar@gmail.com",
          username: "diar123",
          password: hashPassword("Diar_123"),
          image_url:
            "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=785&q=80",
          background_url:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
          points: 400,
          total_trees: 15,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Dwi Yanto",
          email: "subastian@gmail.com",
          username: "subastian123",
          password: hashPassword("Subastian_123"),
          image_url:
            "https://images.unsplash.com/photo-1618481187862-904021f56177?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          background_url:
            "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
          points: 350,
          total_trees: 25,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Rahmanita",
          email: "rahmanita@gmail.com",
          username: "rahmanita123",
          password: hashPassword("Rahmanita_123"),
          image_url:
            "https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          background_url:
            "https://images.unsplash.com/photo-1485201543483-f06c8d2a8fb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
          points: 300,
          total_trees: 25,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Reka Alamsyah",
          email: "reka@gmail.com",
          username: "reka123",
          password: hashPassword("Reka_123"),
          image_url:
            "https://images.unsplash.com/photo-1526313199968-70e399ffe791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          background_url:
            "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=919&q=80",
          points: 1000,
          total_trees: 25,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Jose Sitanggang",
          email: "jose@gmail.com",
          username: "jose123",
          password: hashPassword("Jose_123"),
          image_url:
            "https://images.unsplash.com/photo-1541534401786-2077eed87a74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
          background_url:
            "https://images.unsplash.com/photo-1582410495674-73f41309a9b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          points: 1000,
          total_trees: 35,
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
