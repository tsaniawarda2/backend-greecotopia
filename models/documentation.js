"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Documentation extends Model {
    static associate(models) {
      // Documentation.belongsTo(models.Participant, {
      //   foreignKey: "Participant_id",
      //   targetKey: "Participant_id",
      // });
      Documentation.belongsTo(models.Tanam_Pohon, {
        foreignKey: "tanam_pohon_id",
        targetKey: "tanam_pohon_id",
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
        type: DataTypes.STRING(40),
        validate: {
          max: {
            args: 40,
            msg: `Caption cannot be more than 40 characters`,
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
