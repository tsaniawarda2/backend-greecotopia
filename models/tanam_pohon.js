<<<<<<< HEAD
"use strict";
const { Model } = require("sequelize");
const TanamPohonController = require("../controllers/tanampohon.controller");
=======
'use strict';
const {
  Model
} = require('sequelize');
const TanamPohonController = require('../controllers/tanampohon.controller');
>>>>>>> ee77f026368bebcf6985cc7a6a50cfc5855f0977
module.exports = (sequelize, DataTypes) => {
  class Tanam_Pohon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
<<<<<<< HEAD
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
=======
      // define association here
    }
  };
  Tanam_Pohon.init({
    tanam_pohon_id: DataTypes.STRING,
    title: DataTypes.STRING,
    image_url: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.STRING,
    reward_point: DataTypes.INTEGER,
    due_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Tanam_Pohon',
  });
  Tanam_Pohon.removeAttribute("id")
  return Tanam_Pohon;
};
>>>>>>> ee77f026368bebcf6985cc7a6a50cfc5855f0977
