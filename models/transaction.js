'use strict';
import {Model, Transaction} from 'sequelize'
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.userModel)
      
    }
  }
  transaction.init({
    type: DataTypes.BOOLEAN,
    amount: DataTypes.NUMBER,
    userId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};