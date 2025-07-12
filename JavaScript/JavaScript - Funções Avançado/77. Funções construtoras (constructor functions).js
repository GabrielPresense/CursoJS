// Função construtora -> constroi objetos
// Função fabrica -> fabrica objetos

// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados 
    const ID = 123456;
    const metodoInterno = function() {
         
    };

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metedo = function() {
        console.log(this.nome + ': Sou um método');
    };
}

const p1 = new Pessoa('Gabriel', 'Presense');
const p2 = new Pessoa('Luana', 'Montesso');
p1.metedo();

console.log(p2.nome);
