// Factory function / Contructor function / Classes
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    
    Object.freeze(this);
}

const p1 = new Pessoa('Gabriel', 'Presense');
const p2 = new Pessoa('Luana', 'Montesso');

console.log(p1);
console.log(p2);