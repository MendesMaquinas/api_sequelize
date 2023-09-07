const db = require("../models/index");
const Pessoa = db.Pessoas;
const Endereco = db.Enderecos;

async function adicionarEndereco(endereco) {
    const enderecoCriado = await Endereco.create(endereco);
    console.log(enderecoCriado);
}

async function procurarEnderecoPorId (id) {
    const endereco = await Endereco.findOne({
        where: {id},
       
    })

    console.log(endereco);
}

//adicionarEndereco({
    bairro: "Capão",
    estado: "SP",
    cidade: "Campinas",
    rua: "Rua Alcantara Nevais",
    numero: 403,
    pessoaId: 1,
//})

procurarEnderecoPorId(1);