'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Participant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Participant.init({
    participant_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    no_hp: DataTypes.STRING,
    number_of_trees: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    tanam_pohon_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Participant',
  });
  Participant.removeAttribute("id");
  return Participant;
};