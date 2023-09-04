const db = require("../models/index");
const Pessoa = db.Pessoas;
const Op = db.Sequelize.Op;

function encontrarPorId(id) {
  //select * from pessoas where id =;

  Pessoa.findByPk(id, { raw: true })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      throw err;
    });
}

function encontrarPorNome(nome) {
  //select nome, sobrenome from pessoas where nome =;

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

function encontrarComIdIn(ids) {
  //select * from pessoas where id in;

  //ao passar um array ele converte para in
  Pessoa.findAll({
    where: {
      id: ids,
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

function encontrarComIOffSetELimit() {
  //select * from pessoas where limit 100 offset 900;

  Pessoa.findAll({
    offset: 990,
    limit: 10,
    raw: true,
  })
    .then((result) => {
      console.log(JSON.stringify(result));
    })
    .catch((err) => {
      throw err;
    });
}

function encontrarComLike(comeco) {
  //select * from pessoas where nome like 'Ro%' limit 10;

  Pessoa.findAll({
    where: {
      nome: {
        [Op.like]: comeco + "%",
      },
    },
    limit: 10,
    raw: true,
  })
    .then((result) => {
      console.log(JSON.stringify(result));
    })
    .catch((err) => {
      throw err;
    });
}

function encontrarComOperadores() {
  //select * from pessoas where id <= 5 or sobrenome == "Harphan";

  Pessoa.findAll({
    where: {
      [Op.or]: [
        {
          id: {
            [Op.lte]: 5,
          },
        },
        {
          sobrenome: "Harphan",
        },
      ],
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

//encontrarComIdIn([1,2,3,4,20]);

//encontrarComIOffSetELimit();

//encontrarComLike("Ra");

encontrarComOperadores();
