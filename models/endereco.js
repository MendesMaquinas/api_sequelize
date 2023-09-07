'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Endereco extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Endereco.belongsTo(models.Pessoas, {foreignKey: "pessoaId"})
    }
  }
  Endereco.init({
    bairro: DataTypes.STRING,
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING,
    rua: DataTypes.STRING,
    numero: DataTypes.STRING,
    pessoaId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Enderecos',
    tableName: "enderecos",
  });
  return Endereco;
};