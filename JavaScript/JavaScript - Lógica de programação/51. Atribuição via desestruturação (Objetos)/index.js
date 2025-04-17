const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Presense',
    idade: 28,
    endereco: {
        rua: 'Rua João Magalhões Moço Filho', 
        numero: 7
    }
};

//Atribuição via desestruturação
const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, sobrenome, resto);