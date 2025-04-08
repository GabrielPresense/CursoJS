let num1 = 9.54578;
let num2 = Math.floor(num1); //Arredonda o valor para baixo
console.log(num2);

let num3 = 9.54578;
let num4 = Math.ceil(num3); //Arredonda o valor para cima
console.log(num4);

let num5 = 9.49;
let num6 = Math.round(num5); //Arredonda para o mais proximo tanto á baixo ou a cima
console.log(num6);

let num7 = 9.50;
let num8 = Math.round(num7); //Arredonda para o mais proximo tanto á baixo ou a cima
console.log(num8);

console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6)); //Pega o maior valor dessa sequencia
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)); //Pega o menor valor dessa sequencia

console.log(Math.random()); // sorteia um valor aleatório

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); //Número aleatório entre 10 e 5 e arredondado automaticamente.
console.log(aleatorio);

console.log(Math.PI); //Mostra o valor de PI

console.log(Math.pow(2, 10)); //Elevar valor
console.log(2 ** 10); //Eleva valor tb, porem melhor

num9 = 9;
console.log(num9 ** (1/2)); //Raiz quadrada de um número
console.log(num9 ** 0.5); //Raiz quadrada de um número

console.log(100 / 0);
console.log(!!(100 / 0));
