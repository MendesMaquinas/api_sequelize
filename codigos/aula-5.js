const db = require("../models/index");
const Pessoa = db.Pessoas;

function encontrarPorId(id) {
  //select * from pessoas where id =

  Pessoa.findByPk(id, { raw: true })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      throw err;
    });
}

function encontrarPorNome(nome) {
  //select nome, sobrenome from pessoas where nome =

  Pessoa.findOne({
    attributes: ["nome", "sobrenome"],
    where: {
      nome: nome,
    },
    raw: true,
  })
    .then((result) => {
      console.log(JSON.stringify(result));
    })
    .catch((err) => {
      throw err;
    });
}

//encontrarPorId(500);
//encontrarPorNome("Jerrie");


