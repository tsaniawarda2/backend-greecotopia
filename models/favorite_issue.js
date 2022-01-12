"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favorite_Issue extends Model {
    static associate(models) {
      Favorite_Issue.hasOne(models.Issue, {
        sourceKey: "issue_id",
        foreignKey: "issue_id",
      });
    }
  }
  Favorite_Issue.init(
    {
      user_id: DataTypes.INTEGER,
      issue_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Favorite_Issue",
    }
  );
  Favorite_Issue.removeAttribute("id");
  return Favorite_Issue;
};
