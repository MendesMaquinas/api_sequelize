"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pessoa.hasOne(models.Enderecos, {foreignKey: "pessoaId"})//1 - 1
      Pessoa.hasMany(models.Telefone,{foreignKey: "pessoaId"}) //1 - n
      Pessoa.belongsToMany(Pessoa, {through: "pessoa_seguidores", foreignKey: "pessoaId", as: "seguindo"})//n - n
      Pessoa.belongsToMany(Pessoa, {through: "pessoa_seguidores", foreignKey: "seguePessoaId", as: "seguidores"})//relacionamento na mesma tabela
    }
  }
  Pessoa.init(
    {
      nome: DataTypes.STRING,
      sobrenome: DataTypes.STRING,
      cpf: DataTypes.STRING,
      email: DataTypes.STRING,
      rg: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pessoas",
      tableName: "pessoas",
    }
  );
  return Pessoa;
};
