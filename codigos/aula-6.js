const db = require("../models/index");
const sequelize = db.sequelize;

//usar raw query apenas com consultas complexas

function encontrarPorId(idPessoa) {
  sequelize
    .query("SELECT * FROM pessoas WHERE id = :id;", {
      replacements: { id: idPessoa },
      raw: true,
      type: sequelize.QueryTypes.SELECT,
      plain: true,
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function encontrarPorNome(nome) {
  sequelize
    .query("SELECT nome, sobrenome FROM pessoas WHERE nome = :nome;", {
      replacements: { nome: nome },
      raw: true,
      type: sequelize.QueryTypes.SELECT,
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function encontrarComIdIn(ids) {
  sequelize
    .query("SELECT * FROM pessoas WHERE id IN (:ids);", {
      replacements: { ids: ids },
      raw: true,
      type: sequelize.QueryTypes.SELECT,
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function encontrarComIOffSetELimit(limite, offset) {
  sequelize
    .query("SELECT * FROM pessoas LIMIT :limite OFFSET :offset;", {
      replacements: { limite, offset },
      raw: true,
      type: sequelize.QueryTypes.SELECT,
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function encontrarComLike(repl) {
  sequelize
    .query("SELECT * FROM pessoas WHERE nome LIKE :comecoNome LIMIT 10", {
      replacements: repl,
      raw: true,
      type: sequelize.QueryTypes.SELECT,
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function encontrarComOperadores(repl) {
  sequelize
    .query("SELECT * FROM pessoas WHERE id <= :id OR sobrenome = :sobrenome;", {
      replacements: repl,
      raw: true,
      type: sequelize.QueryTypes.SELECT,
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

//encontrarPorId(299);
//encontrarPorNome("John")
//encontrarComIdIn([1,2,3,4])
//encontrarComIOffSetELimit(10, 500);
//encontrarComLike({ comecoNome: "Ra%" });
encontrarComOperadores({ id: 5, sobrenome: "Becker" });
