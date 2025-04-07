//Exercício, deixar as letras na ordem B, C, A
//Minha solução

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

var A = varB;
var B = varC;
var C = varA;

console.log(A, B, C);

/*
Possíveis soluções de forma mais antiga

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);

----------------------------------------

Possíveis soluções de forma mais atual

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);

*/
