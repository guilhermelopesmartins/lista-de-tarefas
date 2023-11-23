'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Raia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Raia.init({
    titulo: DataTypes.STRING,
    id_quadro: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Raia',
    schema: 'tarefas'
  });
  return Raia;
};