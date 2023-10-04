const db = require("../models/index");
const Pessoa = db.Pessoas;
const PessoaSeguidor = db.PessoaSeguidor;

async function criar(pessoaSeguidor) {
  const pessoaSeguidorCriada = await PessoaSeguidor.create(pessoaSeguidor);
  console.log(pessoaSeguidorCriada);
}

async function encontrarPessoa(idPessoa) {
  const pessoaCriada = await Pessoa.findOne({
    where: { id: idPessoa },
    include: [
      { model: Pessoa, as: "seguindo", through: { attributes: [] } },
      { model: Pessoa, as: "seguidores", through: { attributes: [] } }, 
    ],
  });
  console.log(JSON.parse(JSON.stringify(pessoaCriada)));
}

/*
criar({
    pessoaId: 2,
    seguePessoaId: 5,
});
*/

encontrarPessoa(2);
