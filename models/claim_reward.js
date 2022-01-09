'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Claim_Reward extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Claim_Reward.init({
    history_claim_id: DataTypes.INTEGER,
    no_hp: DataTypes.STRING,
    rank: DataTypes.INTEGER,
    session_month: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    date_of_claim: DataTypes.DATE,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Claim_Reward',
  });
  Claim_Reward.removeAttribute("id");
  return Claim_Reward;
};