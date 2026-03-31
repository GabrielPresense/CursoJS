/**
Operadores lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU -> Uma das expressões precisam ser verdadeiras para retornar true
! -> NOT -> NÂO
 */

const expressaoAnd = true && true && true && true;
const expressaoOr = false || false || false || false;
console.log(expressaoOr);

const usuario = 'Gabriel'; // Form usuário digitou
const senha = '123123'; // Form usuário digitou

const vaiLogar = usuario === 'Gabriel' && '123123';
console.log(vaiLogar);

console.log(!false);