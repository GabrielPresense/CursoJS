// IEEE 754-2008
let num1 = 0.7; // Number
let num2 = 0.1; // Number
let temp = num1 * 'Olá';

// Resolvendo o problema da imprecisão dos números usando as funções (melhor forma)

num1 += num2; // 0.8 | num1 = num1 + num2
num1 += num2; // 0.9 | num1 = num1 + num2
num1 += num2; // 1.0 | num1 = num1 + num2
num1 += num2; // 1.1 | num1 = num1 + num2
num1 += num2; // 1.2 | num1 = num1 + num2
num1 += num2; // 1.3 | num1 = num1 + num2
num1 += num2; // 1.4 | num1 = num1 + num2
num1 += num2; // 1.5 | num1 = num1 + num2
num1 += num2; // 1.6 | num1 = num1 + num2
num1 += num2; // 1.7 | num1 = num1 + num2
num1 += num2; // 1.8 | num1 = num1 + num2
num1 += num2; // 1.9 | num1 = num1 + num2
num1 += num2; // 2.0 | num1 = num1 + num2

num1 = parseFloat(num1.toFixed(2)); // parseFloat ou Number -> Converte para numero inteiro | toFixed(2) -> define a quantidade de casas decimais.

// Resolvendo o problema da imprecisão dos números usando contas
/*
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0
*/

console.log(num1);
console.log(Number.isInteger(num1));

// console.log(num1.toString() + num2); // Converte num1 para String temporariamente e concatena com num2
// num1 = num1.toString(); // muda num1 para string para sempre
// console.log(num1.toString(2)); // converter em N° binário
// console.log(num1.toFixed(2)); // Arredondar casas decimais 
// console.log(Number.isInteger(num1)); // saber se o valor é inteiro se for inteiro retorna true
// console.log(Number.isNaN(temp)); // Verifica se a conta for invalida (NaN)
