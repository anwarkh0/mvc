'use strict';
import { Model } from "sequelize";
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasMany(models.TransactionModel,{
        foreignKey:"userId",
        onUpdate:"CASCADE",
        onDelete:"CASCADE"
      })
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};