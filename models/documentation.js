"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Documentation extends Model {
    static associate(models) {
      // Documentation.belongsTo(models.Participant, {
      //   foreignKey: "articipant_id",
      //   targetKey: "articipant_id",
      // });
      // Documentation.belongsTo(models.TanamPohon, {
      //   foreignKey: "tanam_pohon_id",
      //   targetKey: "tanam_pohon_id",
      // });
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
      caption: DataTypes.STRING(40),
      image_url: DataTypes.STRING,
      messages: DataTypes.STRING,
      partisipant_id: DataTypes.INTEGER,
      tanam_pohon_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Documentation",
    }
  );
  return Documentation;
};
