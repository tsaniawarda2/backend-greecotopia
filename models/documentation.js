"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Documentation extends Model {
    static associate(models) {
      Documentation.belongsTo(models.Tanam_Pohon, {
        foreignKey: "tanam_pohon_id",
        targetKey: "tanam_pohon_id",
      });
      Documentation.belongsTo(models.Participant, {
        foreignKey: "participant_id",
        targetKey: "participant_id",
      });
    }
  }
  Documentation.init(
    {
      documentation_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      caption: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [5, 50],
            msg: `Caption must be between 5 and 50 characters`,
          },
        },
      },
      image_url: DataTypes.STRING,
      messages: DataTypes.STRING,
      participant_id: DataTypes.INTEGER,
      tanam_pohon_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Documentation",
    }
  );
  return Documentation;
};
