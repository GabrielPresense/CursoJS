// String, number, undefined, null, boolean e symbol
const nome = 'Gabriel'; // String
const nome1 = "Gabriel"; // String
const nome2 = `Gabriel`; // String

const num1 = 10; // Number
const num2 = 10.52; // Number

let nomeAaluno; // Undefined, indefinido = não aponta para local nenhum na memória

const sobrenomeAluno = null; // Nulo, explicito -> não aponta para local nenhum na memória

const aprovado = false; // Boolean = true, false (lógico)

console.log(typeof nome, nome);
console.log(typeof nome1, nome1);
console.log(typeof nome2, nome2);

console.log(typeof num1, num1);
console.log(typeof num2, num2);

console.log(typeof nomeAaluno, nomeAaluno);

console.log(typeof sobrenomeAluno, sobrenomeAluno);

console.log(typeof aprovado, aprovado);

console.log('-----------------------------------------------------------------------------------------');

let a = 2;
let b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2
