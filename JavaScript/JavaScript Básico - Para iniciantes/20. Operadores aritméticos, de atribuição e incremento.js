/**
 * Aritméticos
 * + Adição / Concatenação
 * - Subtração 
 * / Divisão
 * * Multiplicação
 * ** Potenciação
 * % Resto da divisão
 * ++ Incremento
 * -- Decremento
 */

/*
        Adição
const num1 = 5;
const num2 = 10;
console.log(num1 + num2); // 15
--------------------------------------
        Concatenação
const num1 = '5';
const num2 = 10;
console.log(num1 + num2); // 510
--------------------------------------
        Subtração
const num1 = 5;
const num2 = 10;
console.log(num1 - num2); // -5
--------------------------------------
        Multiplicação
const num1 = 5;
const num2 = 10;
console.log(num1 * num2); // 50
--------------------------------------
        Divisão
const num1 = 5;
const num2 = 10;
console.log(num1 / num2); // 0.5
--------------------------------------
        Potenciação
const num1 = 5;
const num2 = 10;
console.log(num1 ** num2); // 1024
--------------------------------------
        Resto da divisão
const num1 = 10;
const num2 = 3;
console.log(num1 % num2); // 1
--------------------------------------
        Precedencia
const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log((num1 + num2) * num3); // 70
--------------------------------------
        Precedencia dos valores
() Parenteses
**
* / %
+ -
*/

/*
// Operadores de incremento
// ++Pós -> Primeiro executa a ação e dps faz o incremento do valor 
let contador = 1;
contador ++; // 2
contador ++; // 3
contador ++; // 4
contador ++; // 5
console.log(contador);

let contador2 = 1;
console.log(contador2++);
console.log(contador2);

console.log('--------------------------------------');


// ++Pré -> Primeiro faz a conta e dps retorna o valor
let contador1 = 1;
++contador1; // 2
++contador1; // 3
++contador1; // 4
++contador1; // 5
console.log(contador);

let contador3 = 1;
console.log(++contador3);
console.log(contador3);

console.log('--------------------------------------');

// Operado de decremento
let contador4 = 10;
console.log(--contador4);
console.log(--contador4);

*/

// NaN - not a number | parseInt (Inteiro), ParseFloat(decimmmmmmmmmmmmmmmmmmmmm)
const num1 = 10;
const num2 = Number('5');
console.log(num1 + num2);
console.log(typeof num2);