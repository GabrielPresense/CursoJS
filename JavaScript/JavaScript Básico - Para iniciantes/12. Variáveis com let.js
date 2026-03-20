let nome = 'Gabriel'; //Usamos Let para criar variaveis 

console.log(nome,'nasceu em 1984');
console.log('Em 2000', nome,'conheceu Maria');
console.log(nome, 'casou-se com Maria em 2012');
console.log('Maria teve 1 filho com', nome,'em 2015');
console.log('O filho de', nome,'se chama Eduardo');

let nome1; // Declaração da variavel
console.log(nome1); // Undefined

let nome2; // Declaração da variavel
nome2 = 'João'; // Inicializando a variável
console.log(nome2);
nome2 = 'Gabriel'; //Atualizando a variável
console.log(nome2);

// Não podemos criar variáveis com palavras reservadas
// let if; -> vai dar erro

// Criar variáveis com nomes significativos
// Forma errada
let n = 'campoBaseDeDados';
console.log(n);

//Forma certa
let nomeCliente = 'João';
console.log(nomeCliente);

// Não pode começar o nome de uma variável com o número (1nome)
let no1me;
// Não podem conter espaços ou traços (let nome Cliente)

// Utilizamod camelCase
let nomeCompletoDoCliente = 'Gabriel Presense'
console.log(nomeCompletoDoCliente);

// Variáveis são Case-sensitive
let nomeCliente1 = 'Presense'; // esse let é diferente
let nomecliente1 = 'Gabriel';// desse let

console.log(nomeCliente1, nomecliente1);

// Não podemos redeclarar variáveis com let
// NÃO UTILIZE VAR, UTILIZE LET.