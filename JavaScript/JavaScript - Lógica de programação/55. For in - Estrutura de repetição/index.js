const frutas = ['Pera', 'Maça', 'Uva'];

//Leitor dos indices - for in - forma mais simples
for (let indice in frutas) {
    console.log(frutas[indice]);
}

/* Contador - for clássico
for (let i = 0; i < frutas.length; i++ )  {
    console.log(frutas[i]);
}
*/

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Presense',
    idade: 28 
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}