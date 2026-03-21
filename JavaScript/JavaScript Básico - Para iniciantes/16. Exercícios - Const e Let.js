/*
Gabriel Presense tem 28 anos, pesa 84 kg
tem 1.7 de altura e seu IMC é de 25.9259259258925924
Gabriel nasceu em 1997
*/

const nome = 'Gabriel';
const sobrenome = 'Presense'
const idade = 29;
const peso = 89;
const altura = 1.8;
let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso / (altura * altura);
anoNascimento = 2026 - idade;

// sem template strings
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso,'kg');
console.log('tem', altura,'de altura e seu IMC é de', indiceMassaCorporal);
console.log(nome,'nasceu em', anoNascimento + '.');
console.log('');

// com template strings `${}`
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);