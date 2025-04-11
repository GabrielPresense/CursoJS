/*
operadores Lógicos
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/
console.log(true && true && true);//Todas tem que ser verdadeira para retornar true
console.log(true && false);//false

/*
const usuario = 'Gabriel'; // form que o usuário digitou
const senha = '123456'
//                             true                  true = vai logar
const vaiLogar = usuario === 'Gabriel' && senha === '123456';
console.log(vaiLogar);
*/

const usuario = 'Gabriel'; // form que o usuário digitou
const senha = '123456'
//                             true                   false = não vai logar
const vaiLogar = usuario === 'Gabriel' && senha === '12345';
console.log(vaiLogar);

console.log(true || false);//Ou uma ou outra tem que ser verdadeira para retornar true
console.log(false || true || false);//true
console.log(false || false);//false

console.log(!false); // Iverte o valor e nega o original
