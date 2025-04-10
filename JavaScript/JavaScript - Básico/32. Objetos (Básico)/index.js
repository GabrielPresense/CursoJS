// {} = Objetos [] = arrays


function criaPessoa (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa1 = criaPessoa('Gabriel', 'Presense', 28);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
const pessoa3 = criaPessoa('João', 'Moreira', 55);
const pessoa4 = criaPessoa('Junior', 'Lara', 44);
const pessoa5 = criaPessoa('Jean', 'Otávtio', 69);

console.log(pessoa1.nome, pessoa1.sobrenome);


const pessoa6 = {
    nome: 'Gabriel',
    sobrenome: 'Presense',
    idade: 28,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        ++this.idade;
    }
};

pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();
pessoa6.incrementaIdade();