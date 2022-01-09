"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "user_id",
      });
      Comment.belongsTo(models.Issue, {
        foreignKey: "issue_id",
        targetKey: "issue_id",
      });
    }
  }
  Comment.init(
    {
      comment_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      context: DataTypes.STRING,
      likes: DataTypes.JSON,
      rep_comments: DataTypes.JSON,
      user_id: DataTypes.INTEGER,
      issue_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  Comment.removeAttribute("id");
  return Comment;
};
