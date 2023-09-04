const { DataTypes } = require("sequelize");
const db = require("../models/index");

const Pessoa = db.Pessoa;

function criarPessoa() {
  Pessoa.create({
    nome: "Joao",
    sobrenome: "Siva",
    cpf: "111.111.111-11",
    email: "j@gmail.com",
    rg: "123456",
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function atualizarPessoa(id) {
  Pessoa.update(
    {
      cpf: "000.000.000-00",
    },
    {
      where: {
        id: id,
      },
    }
  )
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function deletarPessoa(id) {
  Pessoa.delete({
    where: {
      id,
    },
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

criarPessoa();
//atualizarPessoa(1);
