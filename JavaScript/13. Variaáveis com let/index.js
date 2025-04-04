let nome ='João'; // Criar uma variável, podemos modificar

/*
let sobrenome; // -> Declarou uma variável sem valor definido (undefined)
console.log(sobrenome);
*/

let sobrenome;
sobrenome = 'Qualquer valor'; // Inicializando a variável
console.log(sobrenome);
sobrenome = 'Presense';
console.log(sobrenome);

/* Não podemos criar variáveis com palavras reservadas
Ex: let if, console, log
Variáveis precisam ter nomes significativos
let n = 'campoDeDados'; -> não recomendado, coloque um nome significativo no lugar do n
*/
let nomeCliente = 'João';// -> recomendado
console.log(nomeCliente);

// Não pode começar o nome de uma variável com número -> let 1nome;
// Não podem conter espaços ou traços -> let nome sobrenome, nome/sobrenome
// Nós utilizamos -> camelCase
/* Variáveis Case-sensitive
let nomeCliente = 'Gabriel Presense'; é diferente de let nomecliente = 'Gabriel Presense';
Letras minusculas e maiusculas fazem diferença
NÃO UTILIZAR VAR, UTILIZE LET.
*/

let nomeCompletoDoCliente = 'Gabriel Presense';
console.log(nomeCompletoDoCliente);

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000' ,nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com' ,nome, 'em 2015.');
console.log('O filho de' ,nome, 'se chama Eduardo.');