//            01234...
const nomes = ['Gabriel', 'Presense', 'Henrique', 'Pedro'];

// For clássico - Geralmente com interáveis (array ou strings)
for (let i = 0; i < nomes.length; i++ ) {
    console.log(nomes[i]);
}

console.log('####');

// For in - Retorna o índice ou chave (string, array ou objetos)
for (let i in nomes) {
    console.log(nomes[i]);
}

console.log('####');

// For of - Retorna o valor em si (iteráveis, arrays ou strings)
for (let valor of nomes) {
    console.log(valor);
}

console.log('####');

// Outra possível forma, forEach, aprofundamento melhor nas proximas aulas 
nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});