"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Participant extends Model {
    static associate(models) {
      Participant.hasMany(models.Documentation, {
        sourceKey: "participant_id",
        foreignKey: "participant_id",
      });
      Participant.belongsTo(models.Tanam_Pohon, {
        foreignKey: "tanam_pohon_id",
        targetKey: "tanam_pohon_id",
      });
      Participant.hasOne(models.User, {
        sourceKey: "user_id",
        foreignKey: "user_id",
      });
    }
  }
  Participant.init(
    {
      participant_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: `Name can't be empty`,
          },
        },
      },
      no_hp: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [11, 13],
            msg: `Phone number must be between 11 and 13 characters`,
          },
        },
      },
      number_of_trees: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      tanam_pohon_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Participant",
    }
  );
  Participant.removeAttribute("id");
  return Participant;
};
