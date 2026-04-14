// For in -> lê os índices ou chaves do objeto
const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Presense',
    idade: 29
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// const frutas = ['Pera', 'Maça', 'Uva'];

// for (let i in frutas) {
//     console.log(frutas[i]);
// }

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }