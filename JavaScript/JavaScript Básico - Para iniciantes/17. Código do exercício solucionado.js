// Código do exercício solucionado
// Abaixo o código completo do exercício anterior.

/*
Gabriel Presense tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Gabriel nasceu em 1980
*/
const nome = 'Gabriel';
const sobrenome = 'Presense';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80; // Corrigido para metros (ao invés de cm)
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;
 
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2019 - idade;
 
// template strings
 
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);