"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Issue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Issue.belongsTo(models.Forum, {
        foreignKey: "forum_id",
        targetKey: "forum_id",
      });
      Issue.hasMany(models.Comment, {
        sourceKey: "issue_id",
        foreignKey: "issue_id",
      });
    }
  }
  Issue.init(
    {
      issue_id: DataTypes.INTEGER,
      title: DataTypes.STRING(40),
      summary: DataTypes.STRING,
      author_name: DataTypes.STRING(40),
      image_url: DataTypes.STRING,
      likes: DataTypes.INTEGER,
      comments: DataTypes.INTEGER,
      tag_id: DataTypes.INTEGER,
      forum_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Issue",
    }
  );
  Issue.removeAttribute("id");
  return Issue;
};
