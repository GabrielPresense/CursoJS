const pessoa1 = {
    nome: 'Gabriel',
    sobrenome: 'Presense',
    idade: 28,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando que a minha idade atual é ${this.idade} ...`);
    },

    incrmentaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrmentaIdade();
pessoa1.fala();
pessoa1.incrmentaIdade();
pessoa1.fala();
pessoa1.incrmentaIdade();
pessoa1.fala();


/*
// Melhor forma, fazer o objeto dentro de uma function
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa1 = criaPessoa('Gabriel', 'Presense', 28);
const pessoa2 = criaPessoa('Luana', 'Montesso', 25);
const pessoa3 = criaPessoa('Julia', 'Montesso', 12);
const pessoa4 = criaPessoa('Marly', 'Montesso', 49);
const pessoa5 = criaPessoa('Nilson', 'Miguel', 54);
console.log(pessoa1.nome, pessoa1.sobrenome);
*/

/*
// Não melhorou tanto mas ainda assim é melhor dentro de objetos
const pessoa1 = {
    nome: 'Gabriel',
    sobrenome: 'Presense',
    idade: 28
};

const pessoa2 = {
    nome: 'Luana',
    sobrenome: 'Montesso',
    idade: 25
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
*/

/*
// Para fazer isso poderiamos fazer em um objeto
const nome01 = 'Gabriel';
const sobrenome01 = 'Presense';
const idade01 = '28';

const nome02 = 'Luana';
const sobrenome02 = 'Montesso';
const idade02 = '25';
*/