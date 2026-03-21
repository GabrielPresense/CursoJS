// Aula 14 - Constantes (const) - Lista de exercícios (descrições)
// Exercício 1 - Crie uma constante chamada nome com o valor "João" e exiba no console com console.log.
console.log('--------------Exercício 01------------------------------------------------------------------------');
const nome = 'João'
console.log(nome);
console.log();

console.log('--------------Exercício 02------------------------------------------------------------------------');
// Exercício 2 - Crie duas constantes: primeiroNumero = 5 e segundoNumero = 10. Multiplique-as e guarde o resultado em uma nova constante chamada resultado. Mostre resultado no console.
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
console.log(resultado);
console.log();

console.log('--------------Exercício 03------------------------------------------------------------------------');
// Exercício 3 - Tente declarar uma constante sem inicializar (ex: const cidade;). Rode e observe o erro. Anote a causa.
// const cidade;
console.log('As constantes são obrigadas a ser inicializadas');
console.log();

console.log('--------------Exercício 04------------------------------------------------------------------------');
// Exercício 4 - Declare const taxa = 0.1 e const valorBase = 200. Crie const valorFinal = valorBase + (valorBase * taxa) e mostre valorFinal no console.
const taxa = 0.1;
const valorBase = 200;
const valorFinal = valorBase + (valorBase * taxa);
console.log(valorFinal);
console.log();

console.log('--------------Exercício 05------------------------------------------------------------------------');
// Exercício 5 - Explique em um comentário: por que const é útil para evitar que alguém “reescreva sem querer” um valor importante no meio do código?
console.log('é pq ele é uma varial constante, o valor dela tem que ser constante');
console.log();

console.log('--------------Exercício 06------------------------------------------------------------------------');
// Exercício 6 - Tente reatribuir uma constante depois de criada (ex: const ano = 2024; ano = 2025;). Rode e observe o erro. Anote a causa.
const ano = 2025;
// ano = 2026;
console.log(ano);
console.log();

console.log('--------------Exercício 07------------------------------------------------------------------------');
// Exercício 7 - Crie const pi = 3.14 e const raio = 7. Calcule a área de um círculo (use a fórmula pi * raio * raio) em uma nova const area e imprima.
const pi = 3.14;
const raio = 7;
const area = pi * raio * raio;
console.log(area);
console.log();

console.log('--------------Exercício 08------------------------------------------------------------------------');
// Exercício 8 - Crie const mensagem = "Olá" e const nome = "Ana". Concatene para formar "Olá Ana" em uma nova const saudacao e mostre no console.
const mensagem = 'Olá ';
const nome1 = 'Ana';
const saudacao = mensagem + nome1;
console.log(saudacao);
console.log();

console.log('--------------Exercício 09------------------------------------------------------------------------');
// Exercício 9 - Crie const a = "5" e const b = "10" (ambos como string). Some com + e mostre o resultado. O que aconteceu: soma numérica ou concatenação? Explique em comentário.
const a = '5';
const b = '10';
console.log(a + b,', é feita a concatenação dos valores pois são strings');
console.log();

console.log('--------------Exercício 10------------------------------------------------------------------------');
// Exercício 10 - Repita o exercício 9, mas com const a = 5 e const b = 10 (números). Mostre o resultado e compare com o exercício 9.
const a1 = 5;
const b1 = 10;
console.log(a1 + b1,', é feita a soma dos valores pois ambos são numbers');
console.log();

console.log('--------------Exercício 11------------------------------------------------------------------------');
// Exercício 11 - Use typeof para mostrar no console o tipo de: (a) um número const x = 10; (b) uma string const y = "10"; (c) o resultado de x + y quando um é número e outro é string.
const x = 10;
const y = '10';
const resultado1 = x + y;
console.log('x é um', typeof x);
console.log('y é uma', typeof y);
console.log(x + y,', é feita a concatenação dos valores pois o "y" por ser string deixa o x (number) como string tb');
console.log();

console.log('--------------Exercício 12------------------------------------------------------------------------');
// Exercício 12 - Crie const primeiroNumero = 5 e const segundoNumero = 10. Faça console.log(typeof (primeiroNumero + segundoNumero)) com parênteses na soma. Qual o tipo impresso? Por quê?
const primeiroNumero1 = 5;
const segundoNumero1 = 10;
console.log(typeof (primeiroNumero1 + segundoNumero1));
console.log('Como os 2 sao number o typeof identifica como number o resultado dentro dos parenteses (resultado dos valores é number).');
console.log();

console.log('--------------Exercício 13------------------------------------------------------------------------');
// Exercício 13 - Tente criar const if = "teste"; Rode e observe o erro. Anote a causa (palavra reservada).
// const if = teste;
console.log('Não podemos criar const com palavras reservadas');
console.log();

console.log('--------------Exercício 14------------------------------------------------------------------------');
// Exercício 14 - Tente criar const 1valor = 100; Rode e observe o erro. Anote a causa (nome não pode começar com número).
// const 1valor = 100;
console.log('Não podemos criar const começando com numeros');
console.log();

console.log('--------------Exercício 15------------------------------------------------------------------------');
// Exercício 15 - Tente criar const nome cliente = "Ana"; (com espaço). Rode e observe o erro. Anote a causa.
// const nome cliente = 'Ana';
console.log('Não podemos criar const com espaço entre as palavras');
console.log();

console.log('--------------Exercício 16------------------------------------------------------------------------');
// Exercício 16 - Crie const nomeCliente e const nomecliente com valores diferentes. Mostre os dois no console e explique em comentário o que significa case sensitive.
const nomeCliente = 'Gabriel';
const nomecliente = 'Presense';
console.log(nomeCliente);
console.log(nomecliente);
console.log('O JS diferencia letras maiusculas e minusculas');
console.log();

console.log('--------------Exercício 17------------------------------------------------------------------------');
// Exercício 17 - Crie const nomeCompletoDoCliente usando camelCase e imprima. Explique em comentário por que camelCase é convenção em JavaScript.
const nomeCompletoDoCliente = 'Gabriel Presense';
console.log('Não é obrigado mas é melhor')
console.log();

console.log('--------------Exercício 18------------------------------------------------------------------------');
// Exercício 18 - Crie const base = 50; depois crie const dobro = base * 2; depois crie const triplo = base * 3; Imprima os três valores. Observe que você não precisou “mudar” base.
const base = 50;
const dobro = base * 2;
const triplo = base * 3;
console.log(base);
console.log(dobro);
console.log(triplo);
console.log();

console.log('--------------Exercício 19------------------------------------------------------------------------');
// Exercício 19 - Crie let contador = 0; e const incremento = 5; Atualize contador somando incremento duas vezes (contador = contador + incremento duas vezes) e mostre contador. Por que incremento pode ser const e contador precisa variar?
let contador = 0;
const incremento = 5;
contador = contador + incremento;
contador = contador + incremento;
console.log(contador, ', O incremento tem que ser const pq é um valor fixo e o contador precisa variar para atualizar os valores finais, incrementando o valor fixo da const');
console.log();

console.log('--------------Exercício 20------------------------------------------------------------------------');
// Exercício 20 - Crie const primeiroNumero = 5 e const segundoNumero = 10. Sem alterar essas constantes, crie novas constantes para: soma, subtracao, multiplicacao e divisao. Mostre todas no console.
const primeiroNumero2 = 5;
const segundoNumero2 = 10;
const soma = primeiroNumero2 + segundoNumero2;
const subtracao = primeiroNumero2 - segundoNumero2;
const multiplicacao = primeiroNumero2 * segundoNumero2;
const divisao = primeiroNumero2 / segundoNumero2;
console.log(primeiroNumero2);
console.log(segundoNumero2);
console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log();

console.log('--------------Exercício 21------------------------------------------------------------------------');
// Exercício 21 - (Predição) Antes de rodar, escreva no comentário o que você acha que sai: const a2 = "5"; const b2 = 10; console.log(a2 + b2); Depois rode e confira.
const a2 = '5';
const b2 = 10;
console.log(a2 + b2);
console.log('Vai sair "510"');
console.log();

console.log('--------------Exercício 22------------------------------------------------------------------------');
// Exercício 22 - (Predição) Antes de rodar, escreva no comentário o que você acha que sai: const a3 = 5; const b3 = 10; console.log(a3 + b3); Depois rode e confira.
const a3 = 5;
const b3 = 10;
console.log(a3 + b3);
console.log('Vai sair "15"');
console.log();

console.log('--------------Exercício 23------------------------------------------------------------------------');
// Exercício 23 - Crie const preco = 79.99 e const quantidade = 3. Calcule const total = preco * quantidade e mostre. Depois crie const frete = 15 e const totalComFrete = total + frete.
const preco = 79.99;
const quantidade = 3;
const total = preco * quantidade;
const frete = 15;
const totalComFrete = total + frete;
console.log(totalComFrete);
console.log();

console.log('--------------Exercício 24------------------------------------------------------------------------');
// Exercício 24 - Tente declarar duas vezes const mesmaCoisa = 1; e const mesmaCoisa = 2; no mesmo escopo. Rode e observe o erro. Anote a causa.
const mesmaCoisa = 1;
// const mesmaCoisa = 2;
console.log('Não pode ter 2 variaveis com os mesmos nomes');
console.log();

console.log('--------------Exercício 25------------------------------------------------------------------------');
// Exercício 25 - Escreva em comentários: em quais situações você escolheria const, e em quais você precisaria de let (valor que muda ao longo do tempo)?
console.log('Eu usaria const caso precisasse usar um valor que nao poderia ser alterado, ex: vamos supor que eu cobro um valor fixo por um serviço então usaria a const para fixar o valor do meu serviço e usaria let para definir a quantidade de vezes que fiz o serviço assim poderia ver o quando eu ganhei');