// Formato: leia o enunciado e implemente o código abaixo de cada bloco.
console.log('--------------Exercício 01------------------------------------------------------------------------');
// Exercício 1 - Recrie o exercício da aula: use const para nome, sobrenome, idade, peso e altura (em metros, ex: 1.8). Use let para imc e anoNascimento. Substitua os dados pelos seus.
const nome = 'Gabriel';
const sobrenome = 'Presense';
const idade = 2026 - 1997;
const peso = 89;
const alturaEmMetros = 1.70;
let indiceMassaCorporal;
let anoNascimento;
const anoAtual = 2026;
console.log();

console.log('--------------Exercício 02------------------------------------------------------------------------');
// Exercício 2 - Calcule o IMC com a fórmula: peso / (altura * altura). Atribua o resultado à variável imc. Coloque um console.log(imc) para conferir o valor.
indiceMassaCorporal = peso / (alturaEmMetros * alturaEmMetros);
console.log(indiceMassaCorporal);

console.log('--------------Exercício 03------------------------------------------------------------------------');
// Exercício 3 - Calcule o ano de nascimento aproximado: ano atual menos a idade (use um número fixo para o ano atual, ex: 2025). Guarde em anoNascimento e mostre com console.log.
anoNascimento = anoAtual - idade;
console.log(anoNascimento);

console.log('--------------Exercício 04------------------------------------------------------------------------');
// Exercício 4 - Imprima a frase completa usando console.log com vírgulas (vários argumentos), como na aula: "[nome] [sobrenome] tem X anos, pesa Y kg, tem Z de altura e seu IMC é W. [nome] nasceu em ANO."
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso,'kg, tem', alturaEmMetros, 'de altura e seu IMC é', indiceMassaCorporal,'.', nome, 'nasceu em', anoNascimento, '.'  );
console.log();

console.log('--------------Exercício 05------------------------------------------------------------------------');
// Exercício 5 - Refaça a mesma frase do exercício 4, mas juntando pedaços com o operador + (concatenação). Lembre-se dos espaços entre as partes do texto.
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg, tem ' + alturaEmMetros + ' de altura e seu IMC é ' + indiceMassaCorporal + '. ' + nome + ' nasceu em ' + anoNascimento + '.');
console.log();

console.log('--------------Exercício 06------------------------------------------------------------------------');
// Exercício 6 - Refaça a mesma frase usando template string (crase ` `) e interpolação ${ } para cada variável. Compare a legibilidade com os exercícios 4 e 5 (comente sua opinião).
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${alturaEmMetros} de altura e seu IMC é ${indiceMassaCorporal}. ${nome} nasceu em ${anoNascimento}.`);
console.log();

console.log('--------------Exercício 07------------------------------------------------------------------------');
// Exercício 7 - Renomeie a variável imc para um nome mais descritivo (ex: indiceMassaCorporal ou massaCorporalIndice). Ajuste todas as declarações e usos para o código continuar funcionando.
// A variável já foi nomeada como indiceMassaCorporal desde o início.
console.log();

console.log('--------------Exercício 08------------------------------------------------------------------------');
// Exercício 8 - Em vez de altura genérica, use um nome que deixe claro a unidade (ex: alturaEmMetros), como sugerido na aula. Recalcule o IMC usando esse nome.
// Já foi usado alturaEmMetros desde o início.
console.log();

console.log('--------------Exercício 09------------------------------------------------------------------------');
// Exercício 9 - Explique em comentário: por que nome, idade e peso podem ser const neste exercício, e por que imc e anoNascimento costumam ser let?
// Nome, sobrenome, idade, peso e altura são const porque seus valores não mudam durante o programa. IMC e anoNascimento são let porque são calculados e atribuídos após a declaração.
console.log();

console.log('--------------Exercício 10------------------------------------------------------------------------');
// Exercício 10 - Crie uma segunda pessoa (outro conjunto de const) e calcule IMC e ano de nascimento para ela também, imprimindo as duas frases (ou duas saídas console.log).
const nome1 = 'Luiz Otávio';
const sobrenome1 = 'Miranda';
const idade1 = 2026 - 1996;
const peso1 = 84;
const alturaEmMetros1 = 1.70;
let indiceMassaCorporal1;
let anoNascimento1;

indiceMassaCorporal1 = peso1 / (alturaEmMetros1 * alturaEmMetros1);
anoNascimento1 = anoAtual - idade1;
console.log();

console.log('--------------Exercício 11------------------------------------------------------------------------');
// Exercício 11 - Deixe comentada no código a frase modelo da aula: "Luiz Otávio Miranda tem 30 anos, pesa 84 kg, tem 1.80 de altura e seu IMC é de 25. Luiz Otávio nasceu em 1989." Use-a só como referência visual.
// "Luiz Otávio Miranda tem 30 anos, pesa 84 kg, tem 1.80 de altura e seu IMC é de 25. Luiz Otávio nasceu em 1989."
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${alturaEmMetros} de altura e seu IMC é ${indiceMassaCorporal}. ${nome} nasceu em ${anoNascimento}.`);
console.log(`${nome1} ${sobrenome1} tem ${idade1} anos, pesa ${peso1}kg, tem ${alturaEmMetros1} de altura e seu IMC é ${indiceMassaCorporal1}. ${nome1} nasceu em ${anoNascimento1}.`);
console.log();

console.log('--------------Exercício 12------------------------------------------------------------------------');
// Exercício 12 - (Predição) Antes de rodar, escreva em comentário: o que console.log("A", 1, "B") imprime em relação a espaços? Depois execute e confira.
console.log("A", 1, "B")
// A 1 B
console.log();

console.log('--------------Exercício 13------------------------------------------------------------------------');
// Exercício 13 - (Predição) const a = 5; const b = "10"; Escreva em comentário o resultado de console.log(a + b). Rode e confira (concatenação vs soma).
const a = 5;
const b = "10";
console.log(a + b);
// 510
console.log();

console.log('--------------Exercício 14------------------------------------------------------------------------');
// Exercício 14 - Dentro de uma template string, interpole uma expressão simples: mostre "Daqui a 10 anos terei X anos" usando idade2 + 10 dentro de ${ }.
const anos = '10';
const idade2 = 29 + 10;
console.log(`Daqui a ${anos} anos terei ${idade2} anos`);
console.log();

console.log('--------------Exercício 15------------------------------------------------------------------------');
// Exercício 15 - Crie const anoAtual = 2025 (ou o ano que estiver usando) e use anoAtual na conta do ano de nascimento, em vez de escrever o ano "solto" no meio do código.
// anoAtual já foi criado no exercício 1
console.log(anoAtual);

console.log('--------------Exercício 16------------------------------------------------------------------------');
// Exercício 16 - Adicione um console.log intermediário mostrando peso, altura e o denominador (altura * altura) antes do IMC final, para treinar depuração "passo a passo".
console.log('Peso:', peso);
console.log('Altura:', alturaEmMetros);
const denominador = alturaEmMetros * alturaEmMetros;
console.log('Denominador (altura * altura):', denominador);
indiceMassaCorporal = peso / denominador;
console.log('IMC:', indiceMassaCorporal);
console.log();

console.log('--------------Exercício 17------------------------------------------------------------------------');
// Exercício 17 - Formate uma linha só com template string que mostre: nome, sobrenome e IMC com texto fixo "kg/m²" após o número (ex: "... IMC: 25.93 kg/m²").
console.log(`${nome} ${sobrenome} tem IMC: ${indiceMassaCorporal} kg/m²`);
console.log();

console.log('--------------Exercício 18------------------------------------------------------------------------');
// Exercício 18 - Tente usar const para imc atribuindo diretamente peso / (alturaEmMetros * alturaEmMetros) na mesma linha da declaração. Funciona? Em que caso você preferiria let em vez de const para o IMC?
const imc = peso / (alturaEmMetros * alturaEmMetros);
console.log('IMC com const:', imc);
// Funciona sim. Preferiria let se o IMC pudesse ser recalculado ou alterado posteriormente, mas aqui é fixo.
console.log();

console.log('--------------Exercício 19------------------------------------------------------------------------');
// Exercício 19 - Escreva três versões da mesma mensagem curta (uma com vírgulas no console.log, uma com +, uma com template string) e compare o tamanho/clareza do código.
console.log('Olá,', 'mundo!');
console.log('Olá, ' + 'mundo!');
console.log(`Olá, mundo!`);
// A versão com template string é a mais clara e concisa, seguida pela concatenação com +. A com vírgulas é útil para múltiplos argumentos mas pode ser menos legível para texto simples.
console.log();

console.log('--------------Exercício 20------------------------------------------------------------------------');
// Exercício 20 - Desafio: pesquise (ou use o que a aula antecipou) como arredondar o IMC para 1 ou 2 casas decimais e aplique antes de imprimir (ex: 25.93). Se ainda não vir Number/toFixed na aula, deixe um comentário TODO.
const imcArredondado = indiceMassaCorporal.toFixed(2);
console.log(`${nome} ${sobrenome} tem IMC: ${imcArredondado} kg/m²`);
console.log();