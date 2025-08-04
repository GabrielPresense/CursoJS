/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineproperty (define uma propriedade)
*/

//Object.freeze(produto);
//produto.nome = 'Outro nome';
//const caneca = { nome: produto.nome, preco: produto.preco };
//const caneca = Object.assign({}, produto, { material: 'porcelana'});
//console.log(Object.keys(produto));

/*
const produto = {nome: 'Produto', preco: 1.8};
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
produto.nome = 'Outra coisa';
*/

const produto = {nome: 'Produto', preco: 1.8, material: 'porcelana'};

for(let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
}
