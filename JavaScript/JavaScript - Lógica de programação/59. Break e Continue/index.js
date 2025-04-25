const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Continue continua para a próxima iteração
// Break sai do laço

for (let numero of numeros) {

    if (numero === 2) {
        console.log('Pulei o número 2');
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('Encontrado o 7, saindo...')
        break;
    }
}

/* For in
for (let i in numeros) {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o número 2');
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('Encontrado o 7, saindo...')
        break;
    }
}
*/

/* For Clássico
for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o número 2');
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('Encontrado o 7, saindo...')
        break;
    }
}
*/

/* while
let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o número 2');
        i++;
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('Encontrado o 7, saindo...')
        i++;
        break;
    }

    i++;
}
*/

/* do while
let i = 0;
do {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o número 2');
        i++;
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('Encontrado o 7, saindo...')
        i++;
        break;
    }

    i++;
} while (i < numeros.length);
*/
