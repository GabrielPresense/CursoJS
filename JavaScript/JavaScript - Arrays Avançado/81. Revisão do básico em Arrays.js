// Valor por referência
//                 0         1        2         3          4
// const nomes = new Array('Gabriel', 'Luana', 'Julia') - outra forma de usar mas menos utilizadas
const nomes = ['Gabriel', 'Luana', 'Julia', 'Wallace', 'Rosana'];
const novo = nomes.slice(1, -1);
console.log(novo);

const novoo = [...nomes];
console.log(nomes.length);

nomes.unshift('Marcelo');// Adiciona no começo
nomes.push('Joana');// Adiciona no final

novo.pop();
console.log(nomes);
console.log(novo);

const removido = nomes.pop(); // Remove do final
console.log(nomes, removido);

/*
const removido = nomes.shift(); // Remove do começo
console.log(nomes, removido);
*/

/*
// const nome = 'Gabriel Presense';
const nomes = [ 'Gabriel', 'Presense' ];
const nome = nomes.join(' ');
console.log(nome);
*/