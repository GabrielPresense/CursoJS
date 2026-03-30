/*
Primitivos (imutáveis) - String, number, boolean, undefined, null (bigint, symbol) - Valores copiados

Referência (mutável) - Array, object, function - Passados por referencia
*/

/*
let a = [1, 2, 3];
let b = [...a];
let c = b;
console.log(a, b);

a.push(4); //Adc
console.log(a, b);

b.pop(); //Remove
console.log(a, b);

a.push('Gabriel');
console.log(c);
*/

const a = {
    nome: 'Gabriel',
    sobrenome: 'Presense'
};

const b = a;

a.nome = 'Luana';
console.log(a);
console.log(b);


/*
let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);
*/

/*
//          0123456
let nome = 'Gabriel';
nome[0] = 'R'; // a String é imutável
console.log(nome[0]);
*/