/*
Gabriel Presense tem 27 anos, pesa 86 kg
tem 1.7 de altura e seu IMC é de 25.92592592925924
Gabriel Presense nasceu em 1997
*/

const nome = 'Gabriel';
const sobrenome = 'Presense';
const idade = 28;
const peso = 86;
const alturaEmM = 1.7;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento; // ano atual - idade

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2025 - idade;

console.log(nome, sobrenome, 'tem' ,idade, 'anos, pesa', peso + 'kg' );
console.log('tem', alturaEmM , 'de altura e seu IMC é de', indiceMassaCorporal);
console.log(nome, sobrenome, 'nasceu em', anoNascimento + '.')

console.log();
console.log('Correção, com metodo mais atual'); 
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);