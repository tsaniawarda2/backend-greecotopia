"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tanam_Pohon extends Model {
    static associate(models) {
      Tanam_Pohon.hasMany(models.Documentation, {
        sourceKey: "tanam_pohon_id",
        foreignKey: "tanam_pohon_id",
      });
    }
  }
  Tanam_Pohon.init(
    {
      tanam_pohon_id: DataTypes.STRING,
      title: DataTypes.STRING,
      image_url: DataTypes.STRING,
      description: DataTypes.STRING,
      location: DataTypes.STRING,
      date: DataTypes.DATE,
      time: DataTypes.STRING,
      reward_point: DataTypes.INTEGER,
      due_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Tanam_Pohon",
    }
  );
  Tanam_Pohon.removeAttribute("id");
  return Tanam_Pohon;
};
