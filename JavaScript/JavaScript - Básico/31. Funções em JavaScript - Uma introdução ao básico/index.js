function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Luiz');
console.log(variavel);

function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}

const resultado = soma(4, 2);
console.log(resultado);

const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

//Forma mais atual
const raizQuadrada = n => n ** 0.5;

console.log(raizQuadrada(9));
console.log(raizQuadrada(16));
console.log(raizQuadrada(25));