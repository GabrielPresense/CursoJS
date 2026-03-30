//            0123456789...
const nome = 'Gabriel Presense'

//                0        1        2          3       4
let alunos = ['Luiz', 'Maria', 'João']; // Luiza, Eduardo
alunos = 123;

console.log(typeof alunos);
console.log(alunos instanceof Array);

/*
//                0        1        2
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos); // Exibir todos os indice
console.log(alunos[0]); // Exibir apenas o zero 'Luiz'
console.log(alunos[2]); // Exibir apenas o 2 'João'

alunos[0] = 'Eduardo'; // Trocar info do indice 0, de 'Luiz' para 'Eduardo'
console.log(alunos); // Exibir todos os indice

alunos[3] = 'Luiza'; // Adc mais indice
console.log(alunos); // Exibir todos os indice

console.log(alunos.length); // Mostra o tamanho total do array, quantos indice tem dentro dele

// Adc mais indice no final
alunos[alunos.length] = 'Luiza';
alunos[alunos.length] = 'Fábio';
alunos[alunos.length] = 'Gabriel';
console.log(alunos);

// Adc mais indice de forma mais simples no final
alunos.push('Luiza');
alunos.push('Fábio');
console.log(alunos);

// Adc novos indices no começo
alunos.unshift('Luiza');
alunos.unshift('Fábio');
console.log(alunos);

// Removendo indice no final do array
alunos.pop();
console.log(alunos);

// Mostrar quem foi removido
const removido = alunos.pop();
console.log(removido);
console.log(alunos);

// Removendo indice do começo do array
alunos.shift();
console.log(alunos);

// Remove e mostrar quem foi removido
const removido = alunos.shift();
console.log(removido);
console.log(alunos);

// Deixar um indice vazio
delete alunos[1];
console.log(alunos);
console.log(alunos[1]);

// Posso acessar indices que nao existe (undefined)
console.log(alunos[50]);

// Fatiamento
alunos.push('Luiza');
alunos.push('Eduardo');

console.log(alunos.slice(0, 3)); // Corta da esquerda p direita
console.log(alunos.slice(0, -1)); // Corta da direita p esquerda, melhor forma
*/

