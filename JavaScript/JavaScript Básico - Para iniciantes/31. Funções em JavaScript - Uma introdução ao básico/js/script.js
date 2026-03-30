function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}

const resultado = soma(4, 2);
console.log(resultado);

const raiz = n => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));


/*
function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
    // console.log('Olá mundo!') // Oq estiver abaixo de return não será mais executado
}
*/

// const resultado = soma(4, 2); // Substitui os dois valores de x e y
// console.log(resultado);

// const resultado = soma(4); // Substitui o valor de x e o y usa o valor normal
// console.log(resultado);

// const resultado = soma(); // Assume os valores atribuidos em x e y dentro da function
// console.log(resultado);

/*
const resultado = soma();
console.log(resultado); // NaN
*/

// console.log(soma(2, 2));
//console.log(resultado); // vai dar erro, pois 'resultado' esta protegido dentro da function


/*
function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Gabriel');
console.log(variavel);
*/