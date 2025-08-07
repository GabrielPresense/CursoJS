/*
Javascript é baseado em protótipos para passa propriedades e métodos
de um objeto para outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela
primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__)
que vem de propriedade prototype da função construtora que foi usada para
criá-lo. Quando tentamos acessar um membro de um objto, primeiro o motor
do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia
de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
}

// Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};

// Instância
const pessoa1 = new Pessoa('Gabriel', 'P.'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Luana', 'M.'); // <- Pessoa = Função construtora
const data = new Date(); // <-- Date = Função construtora

console.dir(pessoa1);
console.dir(data);