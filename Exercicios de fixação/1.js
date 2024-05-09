const pessoa = {
    nome: "João",
    idade: "22",
    profissao: "Farmaceutico",
};

function exibirInformacoes(pessoa) {
    console.log(`Nome: ${pessoa.nome}`);
    console.log(`Idade: ${pessoa.idade}`);
    console.log(`Profissao: ${pessoa.profissao}`);
}

//
function atualizarIdade(pessoa, novaIdade) {
    pessoa.idade = novaIdade; // atualiza a idade da pessoa
}

function atualizarProfissao(pessoa, novaprofissao) {
    pessoa.profissao = novaprofissao; // atualiza a idade da pessoa
}

// Exbir informações da pessoa
console.log("Informações da Pessoa:");
exibirInformacoes(pessoa);

// Atualizar idade da pessoa para 35
atualizarIdade(pessoa, 35);

// Exibir informações após a atualização da idade 
console.log("\nInformações da Pessoa após atualização:");
exibirInformacoes(pessoa);