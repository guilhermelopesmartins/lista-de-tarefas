'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SecaoNota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SecaoNota.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    data_criacao: DataTypes.DATE,
    id_usuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SecaoNota',
  });
  return SecaoNota;
};