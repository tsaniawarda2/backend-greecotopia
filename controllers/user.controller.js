const { Op } = require("sequelize");
const USER_MODEL = require("../models").User;
const { hashPassword } = require("../helpers/bcrypt");

class UserController {
  // GET All User
  static async getAllUser(req, res, next) {
    try {
      const dataUser = await USER_MODEL.findAll({
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"],
        },
        where: {
          role_id: 2,
        },
        order: [["points", "DESC"]],
      });
      if (!dataUser) {
        next({
          code: 404,
          message: `Data Users is Empty`,
        });
      } else {
        res.status(200).send({
          message: "Success Get All Users",
          users: dataUser,
        });
      }
    } catch (error) {
      next(error);
    }
  }

  // GET User by Id
  static async getUserbyId(req, res, next) {
    try {
      const userID = req.params.id;

      const dataUser = await USER_MODEL.findOne({
        where: {
          user_id: Number(userID),
        },

        attributes: {
          exclude: ["password", "createdAt", "updatedAt"],
        },
      });
      if (dataUser) {
        res.status(200).send({
          message: `Success Get User Id ${userID}`,
          users: dataUser,
        });
      } else {
        next({
          code: 404,
          message: `Data User Id ${userID} Not Found`,
        });
      }
    } catch (error) {
      next(error);
    }
  }

  // UPDATE User by Id
  static async updateUserById(req, res, next) {
    try {
      const userID = req.params.id;

      const { email, username, password, role_id } = req.body;

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

      const account = req.userAccount;

      if (password) {
        if (Number(userID) !== Number(account?.user_id)) {
          next({
            code: 400,
            message: "Access Denied! Password failed to change",
          });
        } else {
          const passPattern = new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[_/!@#$%^&*.])(?=.{8,})"
          );
          if (passPattern.test(password)) {
            req.body.password = hashPassword(password);
          } else {
            next({
              code: 400,
              message:
                "Password must have at least 8 characters consisting of uppercase and lowercase letters, numbers, symbols(!@#$_%^&*). Example: Gre3c0topi4!",
            });
          }
        }
      }

      if (role_id) {
        if (account?.roleName !== "admin") {
          next({
            code: 400,
            message: "Access Denied! Role Id failed to change",
          });
        }
      }
      const dataUser = await USER_MODEL.findOne({
        where: {
          user_id: Number(userID),
        },
      });

      if (dataUser) {
        if (existingUser && Number(userID) !== Number(existingUser.user_id)) {
          next({
            code: 400,
            message: "Email or Username already exists",
          });
        } else {
          await USER_MODEL.update(req.body, {
            where: {
              user_id: Number(userID),
            },
          });
          res.status(200).send({
            message: `Data User Id ${userID} was Updated Successfully`,
            updatedData: req.body,
          });
        }
      } else {
        next({
          code: 404,
          message: `Data User Id ${userID} Not Found`,
        });
      }
    } catch (error) {
      next(error);
    }
  }

  // DELETE User by Id
  static async deleteUserById(req, res, next) {
    try {
      const userID = req.params.id;

      const dataUser = await USER_MODEL.findOne({
        where: {
          user_id: Number(userID),
        },
      });

      if (dataUser) {
        await USER_MODEL.destroy({
          where: {
            user_id: Number(userID),
          },
        });
        res.status(200).send({
          message: `Data User Id ${userID} was Deleted Successfully`,
          deletedUser: dataUser,
        });
      } else {
        next({
          code: 404,
          message: `Data User Id ${userID} Not Found`,
        });
      }
    } catch (error) {
      next(error);
    }
  }

  // GET Top10
  static async getTopTen(req, res, next) {
    try {
      const dataTopTen = await USER_MODEL.findAll({
        where: {
          role_id: 2,
        },
        offset: 0,
        limit: 10,
        order: [["points", "DESC"]],
        attributes: ["user_id", "fullname", "username", "image_url", "points"],
      });

      res.status(200).send({
        message: `Success Get Data Top 10`,
        users: dataTopTen,
      });
    } catch (error) {
      next(error);
    }
  }
  // GET Top5
  static async getTopFive(req, res, next) {
    try {
      const dataTopFive = await USER_MODEL.findAll({
        where: {
          role_id: 2,
        },
        offset: 0,
        limit: 5,
        order: [["points", "DESC"]],
        attributes: ["user_id", "fullname", "username", "image_url", "points"],
      });

      res.status(200).send({
        message: `Success Get Data Top 5`,
        users: dataTopFive,
      });
    } catch (error) {
      next(error);
    }
  }

  // GET Top3
  static async getTopThree(req, res, next) {
    try {
      const dataTopThree = await USER_MODEL.findAll({
        where: {
          role_id: 2,
        },
        offset: 0,
        limit: 3,
        order: [["points", "DESC"]],
        attributes: ["user_id", "fullname", "username", "image_url", "points"],
      });

      res.status(200).send({
        message: `Success Get Data Top 3`,
        users: dataTopThree,
      });
    } catch (error) {
      next(error);
    }
  }

  // DELETE Points
  static async updatedPoints(req, res, next) {
    try {
      const roleID = req.params.role_id;
      const points = req.body.points;

      const findRole = await USER_MODEL.findOne({
        where: {
          role_id: Number(roleID),
        },
      });

      if (!findRole) {
        next({
          code: 404,
          message: `Data Role ${roleID} Not Found`,
        });
      } else {
        const updatedPoints = {
          points: points,
        };

        await USER_MODEL.update(updatedPoints, {
          where: {
            role_id: Number(roleID),
          },
        });

        res.status(200).send({
          message: `Success Update Data Points`,
          updatedPoints,
        });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
