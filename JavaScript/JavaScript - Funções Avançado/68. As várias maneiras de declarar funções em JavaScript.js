// Declaração de função (function hoisting)
falaOi(); // Posso chamar a função a cima ou a baixo da declaração da função
function falaOi() {
    console.log('Oie');
}

// First-class objects (Objectos de primeira classe)
// Function expression
const souUmDado = function() {
    console.log('Sou um dado.');
};
souUmDado();

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando...');
    }
};
obj.falar();