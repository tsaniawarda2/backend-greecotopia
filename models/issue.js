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
      title: {
        type: DataTypes.STRING(40),
        validate: {
          len: {
            args: [5, 40],
            msg: `Title must be between 5 and 40 characters`,
          },
        },
      },
      summary: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [24, 125],
            msg: `Summary must be between 24 and 125 characters`,
          },
        },
      },
      description: DataTypes.TEXT,
      author_name: DataTypes.STRING(40),
      image_url: DataTypes.STRING,
      likes: DataTypes.INTEGER,
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
