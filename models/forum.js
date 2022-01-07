"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Forum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Forum.hasMany(models.Issue, {
        sourceKey: "forum_id",
        foreignKey: "forum_id",
      });
    }
  }
  Forum.init(
    {
      forum_id: DataTypes.INTEGER,
      title: DataTypes.STRING(40),
      image_url: DataTypes.STRING,
      banner_url: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Forum",
    }
  );
  Forum.removeAttribute("id");
  return Forum;
};
