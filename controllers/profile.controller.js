const { Op } = require("sequelize");
const USER_MODEL = require("../models").User;
const REWARD_MODEL = require("../models").Claim_Reward;
const { hashPassword } = require("../helpers/bcrypt");

class ProfileController {
  // Get Data Profile
  static async getProfile(req, res, next) {
    try {
      const dataUser = await USER_MODEL.findOne({
        where: {
          user_id: req.userAccount.user_id,
        },
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"],
        },
      });

      res.status(200).send({
        message: `Success Get Data Profile`,
        dataUser: dataUser,
      });
    } catch (error) {
      next(error);
    }
  }

  // Update Data Profile
  static async updateProfile(req, res, next) {
    try {
      const dataUser = await USER_MODEL.findOne({
        where: {
          user_id: req.userAccount.user_id,
        },
      });

      const { email, username, password } = req.body;

      // Check email and username
      const filterQuery = {};
      if (username) {
        filterQuery.username = username;
      }
      if (email) {
        filterQuery.email = email;
      }
      const existingUser = await USER_MODEL.findOne({
        where: {
          [Op.or]: filterQuery,
        },
      });

      // Password Ada?
      if (password) {
        const passPattern = new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[_/!@#$%^&*.])(?=.{8,})"
        );
        if (passPattern.test(password)) {
          req.body.password = hashPassword(password);
        } else {
          next({
            code: 400,
            message:
              "Password harus lebih dari 8 karakter mengandung huruf besar dan kecil, angka, dan simbol(!@#$_%^&*). Example: Gre3c0topi4!",
          });
        }
      }
      const userID = dataUser.dataValues.user_id;

      if (existingUser && Number(userID) !== Number(existingUser.user_id)) {
        next({
          code: 400,
          message: "Email atau Username sudah ada",
        });
      } else {
        await USER_MODEL.update(req.body, {
          where: {
            user_id: Number(userID),
          },
        });
        res.status(200).send({
          message: `Data Profile berhasil diubah`,
          updatedData: req.body,
        });
      }
    } catch (error) {
      next(error);
    }
  }

  // DELETE Account User
  static async deleteAccount(req, res, next) {
    try {
      const dataUser = await USER_MODEL.findOne({
        where: {
          user_id: req.userAccount.user_id,
        },
      });

      const userID = dataUser.dataValues.user_id;

      await USER_MODEL.destroy({
        where: {
          user_id: Number(userID),
        },
      });
      res.status(200).send({
        message: `Account was Deleted Successfully`,
        deletedUser: dataUser,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProfileController;
