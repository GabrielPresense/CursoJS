// Parametro de resto
const conta = function conta(operador, acumulador, ...numeros) { 
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
};
conta('+', 1, 20, 30, 40, 50);


// arguments que sustenta todos os argumentos enviados
/*
function funcao([valor1, valor2, valor3]) { 
    console.log(valor1, valor2, valor3);
}
funcao(['Gabriel', 'Presense', 28]);
*/


/*function funcao(a, b = 2, c = 4) { //Forma atual  de se resolver esse problema com o valor 
    console.log(a + b + c);
}
funcao(2, undefined, 20);
*/
/*function funcao(a, b) { //Forma antigas de se resolver esse problema com o valor 
    b = b || 0;
    console.log(a + b);
}
funcao(2);
*/

/*
function funcao(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcao(1, 2, 3);
*/

/*
function funcao(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a, b, c);
}
funcao(1, 2, 3, 4, 5, 6, 7);
*/