/* Fazer uma linha de repetição que faça o seguinte código
console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');
*/

for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}

//Podemos manipular a forma que a repetição funciona
for (let i = 400; i <= 500; i += 10) { //Faz a repetição pulando de 10 em 10.
    console.log(`Linha ${i}`);
}

//Começando com o número negativo
for (let i = -100; i <= 100; i += 10) { //Faz a repetição pulando de 10 em 10.
    console.log(`Linha ${i}`);
}

//De trás para frente
for (let i = 500; i >= 400; i -= 10) { //Faz a repetição pulando de 10 em 10.
    console.log(`Linha ${i}`);
}

//Informando números pares e ímpares
for (let i = 0; i <= 10; i++) { //Faz a repetição pulando de 10 em 10.
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par);
}

//                0       1       2
const frutas = ['Maçã', 'Pêra', 'Uva', 'Banana', 'Morango', ''];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);
}