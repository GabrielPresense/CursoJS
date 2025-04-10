// Não podemos criar constantes com palavras reservadas, Ex: const if, console, log
// constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com número -> const 1nome
// Não podem conter espaços ou traços -> const nome sobrenome, nome/sobrenome
// Utilizamos camelCase - Consiste em unir palavras sem espaços e iniciar cada palavra com letra maiúscula, exceto a primeira, exemploPratico
// constantes Case-sensitive -> Letras minusculas e maiusculas fazem diferença
// Não podemos redeclarar constantes com const
// NÃO UTILIZAR VAR, UTILIZE CONST.

// const nome; -> diferente da let nao podemos criar uma const vazia, tem que ter uma atribuição
/*
const nome = 'João';
console.log(nome);
*/
// String fica dentro de '' = Text | Number não tem '' = Número
const primeiroNumero = 5; // Number
const segundoNumero = 10;
const terceiroNumero = '15';
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(primeiroNumero);

console.log(typeof primeiroNumero); // Verifica o tipo de dado
console.log(typeof segundoNumero);
console.log(typeof terceiroNumero);

console.log(primeiroNumero + segundoNumero); // Number + Number = Soma os resultados
console.log(primeiroNumero + terceiroNumero); // Number + String = concatena os resultados

console.log(typeof (primeiroNumero + segundoNumero)); // Verifica o tipo do resultado
console.log(typeof (primeiroNumero + terceiroNumero));

// const nao pode alterar o valor dela ao longo do código.

