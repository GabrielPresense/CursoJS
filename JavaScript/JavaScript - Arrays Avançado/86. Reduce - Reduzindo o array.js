// Some todos os números (reduce)
//               0  1   2   3  4  .....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
}, 0);
console.log('Soma de todos os números (reduce)')
console.log(total);
console.log('')

//Retorne um array com os pares (Filter) - Não recomendado fazer com o reduce
//               0  1   2   3  4  .....
const numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total2 = numeros2.reduce(function(acumulador, valor, indice, array) {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
console.log('Um array com os pares mesma função do (Filter) so que com (reduce)')
console.log(total2);
console.log('')

//Retorne um array com o dobro dos valores (Map) - Não recomendado fazer com o reduce
//               0  1   2   3  4  .....
const numeros3 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total3 = numeros3.reduce(function(acumulador, valor) {
    acumulador.push(valor * 2);
    return acumulador;
}, []);
console.log('um array com o dobro dos valores (Map) so que com (reduce)')
console.log(total3);
console.log('')

// Soma dos pares (reduce)
//               0  1   2   3  4  .....
const numeros4 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total4 = numeros4.reduce(function(acumulador, valor, indice, array) {
    if(valor % 2 === 0) {
        acumulador += valor;
    }

    return acumulador;
}, 0);
console.log('Soma de todos os números (reduce)')
console.log(total4);
console.log('')

// Soma dos Impares (reduce)
//               0  1   2   3  4  .....
const numeros5 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total5 = numeros5.reduce(function(acumulador, valor, indice, array) {
    if(valor % 2 !== 0) {
        acumulador += valor;
    }
    
    return acumulador;
}, 0);
console.log('Soma de todos os números (reduce)')
console.log(total5);
console.log('')

// Retorne a pessoa mais velha
console.log('Retorne a pessoa mais velha');
const pessoas = [
    { nome: 'Luiz', idade: 62 }, 
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 105 },
    { nome: 'Leticia', idade: 10 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 1000 },
];
const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);

