/*
const pessoa1 = new Object();
pessoa1.nome = 'Gabriel';
pessoa1.sobrenome = 'Presense';
pessoa1.idade = 28;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome.`);
};
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.getDataNascimento());
for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
}
*/


// Factory funcrions / Constructor functions / Classes
/*
//Factory funcrions 
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Gabriel', 'Presense');
console.log(p1.nomeCompleto());
*/

// Constructor functions
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

const p1 = new Pessoa('Gabriel', 'Presense');
delete p1.nome;
const p2 = new Pessoa('Luana', 'Montesso');
   
console.log(p1);
console.log(p2);