/*
const nome = 'Gabriel';
let i = 0;

//Não é recomndado usar o while para isso é melhor utilizar o for 
while (i < nome.length) {
    console.log(nome[i]);
    i++;
}

console.log('Segue a vida...');
*/

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
/*
const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

console.log('####');

do {
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10);

*/

const min = 1;
const max = 50;
let rand = 10;

while (rand !== 10) {
    console.log(rand);
}

console.log('####');

do {
    console.log(rand);
} while(rand !== 10);