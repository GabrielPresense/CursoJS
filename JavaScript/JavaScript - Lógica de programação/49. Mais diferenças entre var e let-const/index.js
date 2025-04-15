const verdadeira = true;

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função


let nome = 'Luiz'; // criando
var nome2 = 'Luiz'; // criando

if (verdadeira) {
    let nome = 'Gabriel'; // criando outra variavel dentro desse bloco
     var nome2 = 'Rogério'; // redeclarando
    
    if (verdadeira) {
        var nome2 = 'Presense'; // redeclarando
        let nome = 'Outra coisa';
    }
}

console.log(nome, nome2);


/*
function falaOi () {

    if (verdadeira) {
        let nome = 'Gabriel';
        var sobrenome = 'Presense'
    }

    console.log(sobrenome);
}

falaOi();
*/

//let sobrenome = 'Presense';
//console.log(sobrenome);
