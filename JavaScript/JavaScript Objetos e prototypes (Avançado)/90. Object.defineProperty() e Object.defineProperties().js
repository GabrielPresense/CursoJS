// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // Mostra o valor
        writable: true, // Pode alterar
        configurable: true // Configuravel
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // Mostra a chave
            value: nome, // Mostra o valor
            writable: true, // Pode alterar
            configurable: true // Configuravel
        },
        preco: {
            enumerable: true, // Mostra a chave
            value: preco, // Mostra o valor
            writable: true, // Pode alterar
            configurable: true // Configuravel
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

for(let chave in p1) {
    console.log(chave);
}