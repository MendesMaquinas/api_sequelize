const db = require("../models/index");

const Pessoa = db.Pessoa;

const pessoas = [
  {
    nome: "Joao",
    sobrenome: "Siva",
    cpf: "111.111.111-11",
    email: "j@gmail.com",
    rg: "123456",
  },
  {
    nome: "Sça",
    sobrenome: "fds",
    cpf: "111.111.111-11",
    email: "j@gmail.com",
    rg: "123456",
  },
  {
    nome: "AA",
    sobrenome: "sa",
    cpf: "111.111.111-11",
    email: "j@gmail.com",
    rg: "123456",
  },
];

function criarPessoas() {
  Pessoa.bulkCreate(pessoas)
    .then((ret) => {
      console.log(ret);
    })
    .catch((err) => {
      console.log(err);
    });
}

//criarPessoas();
