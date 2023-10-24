'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cartao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cartao.init({
    id_raia: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    checklist: DataTypes.JSON,
    data_criacao: DataTypes.DATE,
    data_limite: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Cartao',
  });
  return Cartao;
};