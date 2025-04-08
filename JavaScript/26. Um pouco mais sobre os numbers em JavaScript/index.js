// padrão IEEE 754-2008
let num1 = 1;
let num2 = 2.5;
let num3 = 5;
let num4 = 10
let num5 = 10.5789551255547
let num6 = 10;
let num7 = 10.5;
let temp1 = num1 * 'Ola';
let temp2 = num1 * '5';
let num8 = 0.7;
let num9 = 0.1;
let num10 = 0.7;
let num11 = 0.1;

console.log(num1.toString() + num2); // Converte o Number para String e concatena com o num2

num3 = num3.toString(); // Converte o Number para String para sempre
console.log(num3);

console.log(num4.toString(2)); // Mostra o valor binário de num1

console.log(num5.toFixed(2)); // Dimuir as casas decimais

console.log(Number.isInteger(num6)); // Informa se o valor é inteiro ou não, inteiro = true, se for quebrado = false
console.log(Number.isInteger(num7));

console.log(Number.isNaN(temp1)); // Informa se o valor é invalido NaN - Not a Number
console.log(Number.isNaN(temp2));


num8 += num9; // 0.8
num8 += num9; // 0.9
num8 += num9; // 1.0
num8 += num9; // 1.1
num8 += num9; // 1.2
num8 += num9; // 1.3
num8 += num9; // 1.4
num8 += num9; // 1.5
num8 += num9; // 1.6
num8 += num9; // 1.7
num8 += num9; // 1.8
num8 += num9; // 1.9
num8 += num9; // 2.0
num8 = Number(num8.toFixed(2));
console.log(num8);
console.log(Number.isInteger(num8));

num10 = ((num10 * 100) + (num11 * 100)) / 100; // 0.8
num10 = ((num10 * 100) + (num11 * 100)) / 100; // 0.9
num10 = ((num10 * 100) + (num11 * 100)) / 100; // 1.0
console.log(num10);
console.log(Number.isInteger(num10));


