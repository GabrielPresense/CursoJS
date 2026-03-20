// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos modificar o valor de uma constante
// Podemos modificar o valor de um let
// NÃO UTILIZAR VAR, UTILIZE CONST.

/* erro
const nome = 'João';
nome = 'Gabriel'

correto
let nome = 'João';
nome = 'Gabriel'
*/

// + - * /

// String = Text | Number = Número
const primeiroNumero = 5; // ('string') -> '5' + 10 = 510
const segundoNumero = 10; 
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

// console.log(primeiroNumero + segundoNumero);

console.log(typeof (primeiroNumero + segundoNumero));