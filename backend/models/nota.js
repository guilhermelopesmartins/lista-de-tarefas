'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Nota.init({
    id_secao: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    hash_imagem: DataTypes.STRING,
    id_tag: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Nota',
    schema: 'tarefas'
  });
  return Nota;
};