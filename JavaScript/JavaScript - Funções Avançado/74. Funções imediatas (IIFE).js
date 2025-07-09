// IIFE -> Immediately invoked function expression
(function(idade, peso, altura) {
    
    const sobrenome = 'Presense';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    
    function falaNome() {
        console.log(criaNome('Gabriel'));
    }

    falaNome();
    console.log(idade, peso, altura);
    
})(28, 80, 1.70);

const nome = 'Qualquer coisa';