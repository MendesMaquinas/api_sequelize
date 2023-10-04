const db = require("../models/index");
const Pessoa = db.Pessoas;
const Telefone = db.Telefone;
const Endereco = db.Enderecos;

async function adicionarTelefone(telefone) {
  const telefoneCriado = await Telefone.create(telefone);
  console.log(telefoneCriado);
}

async function buscarTodos() {
  const telefones = await Telefone.findAll({ raw: true });
  console.log(telefones);
}

async function encontrarPessoaComTelefone(idPessoa) {
  const pessoa = await Pessoa.findOne({
    where: { id: idPessoa },
    include: [
      {
        model: Telefone,
        where: {
            id: 1
        }
      },
      {
        model: Endereco,
      },
    ],
  });

  console.log(JSON.parse(JSON.stringify(pessoa)));
}

encontrarPessoaComTelefone(3);
