// Exercícios - Base (declare, inicialize e use)
// Exercício 1 - Crie uma variável nome com let e inicialize com "Ana". Em seguida, mostre no console: O nome é Ana.
console.log('--------------Exercício 1--------------------------------------------------------------');
let nome = 'Ana';
console.log('O nome é', nome);
console.log();

console.log('--------------Exercício 2-------------------------------------------------------------------------');
// Exercício 2 Crie uma variável anoNascimento com let e inicialize com 2004. Mostre no console: Ana nasceu em 2004.
let anoNascimento = 2004;
console.log(nome, 'nasceu em', anoNascimento);
console.log();

console.log('--------------Exercício 3-------------------------------------------------------------------------');
// Exercício 3 Declare let cidade; (sem inicializar). Faça console.log(cidade) e observe o valor exibido.
let cidade;
console.log(cidade);
console.log();

console.log('--------------Exercício 4-------------------------------------------------------------------------');
// Exercício 4 - Depois do exercício anterior, atribua um valor para cidade em outra linha (por exemplo "Fortaleza") e faça console.log(cidade) novamente.
cidade = 'Maringá';
console.log(cidade);
console.log();

console.log('--------------Exercício 5-------------------------------------------------------------------------');
// Exercício 5 - Crie duas variáveis: produto e preco. Imprima: Produto: X - Preco: R$ Y (sem usar any, apenas strings e números).
let produto = 1;
let preco = 20;
console.log('Produto:', produto, '- Preço: R$', preco);
console.log();

console.log('--------------Exercício 6-------------------------------------------------------------------------');
// Exercício 6 - Troque o valor de produto durante o código e mostre novamente no console (deve mudar a saída).
produto = 7;
console.log('Produto:', produto, '- Preço: R$', preco);
console.log();

console.log('--------------Exercício 7-------------------------------------------------------------------------')
//Exercícios - Variável “substitui” texto repetido
// Exercício 7 - Pegue um texto com várias ocorrências de um nome (ex: João repetido). Substitua todas as ocorrências usando uma única variável let nome = "João".
let nome1 = 'Gabriel';
console.log('O desenvolvedor', nome1, 'chegou ao escritório cedo. Assim que sentou,', nome1, 'abriu o editor de código.', nome1, 'percebeu que havia um bug no sistema, mas', nome1, 'sabia exatamente como resolver. Ao final do dia,', nome1, 'enviou o pull request com as correções.');
console.log();

console.log('--------------Exercício 8-------------------------------------------------------------------------');
// Exercício 8 - No meio do código (em outra linha), altere nome para "Maria" e mostre as frases seguintes com o novo valor (a saída deve refletir a mudança).
nome1 = 'Maria';
console.log('O desenvolvedor', nome1, 'chegou ao escritório cedo. Assim que sentou,', nome1, 'abriu o editor de código.', nome1, 'percebeu que havia um bug no sistema, mas', nome1, 'sabia exatamente como resolver. Ao final do dia,', nome1, 'enviou o pull request com as correções.');
console.log();

console.log('--------------Exercício 9-------------------------------------------------------------------------');
// Exercício 9 - Repita o exercício 7, mas use dois nomes diferentes: let pessoa1 = "João"; let pessoa2 = "Maria";.
let pessoa1 = 'João';
let pessoa2 = 'Maria';
console.log('No projeto de software,', pessoa1, 'cuida do banco de dados enquanto', pessoa2, 'foca no frontend. Quando', pessoa1, 'termina uma query,', pessoa2, 'a integra à interface. O trabalho de', pessoa1 ,'e', pessoa2 ,'garante que o sistema seja entregue no prazo.');
console.log();

// Exercícios - Regras de nome de variáveis (faça e explique)
console.log('--------------Exercício 10------------------------------------------------------------------------');
// Exercício 10 - Crie uma variável chamada nomeCliente e imprima seu valor. Depois tente criar nomecliente em outro trecho e explique o que acontece (diferença de maiúsculas/minúsculas).
let nomeCliente = 7;
console.log(nomeCliente);
let nomecliente = 10;
console.log(nomeCliente);
console.log('O valor de nomeCliente permanece 7 porque JavaScript diferencia maiúsculas de minúsculas, então nomeCliente e nomecliente são variáveis diferentes.');
console.log();

console.log('--------------Exercício 11------------------------------------------------------------------------');
// Exercício 11 - Crie uma variável com nome composto em camelCase (ex: nomeCompleto) e mostre no console.
let nomeCompleto = 'Guarda Sol'
console.log(nomeCompleto);
console.log();

console.log('--------------Exercício 12------------------------------------------------------------------------');
// Exercício 12 - Crie variáveis com nomes significativos (ex: troque let x = "João" por let nomeCliente = "João") e explique em 1 frase por que ficou mais fácil entender.
let nomeCliente1 = 'João';
console.log('Ficou mais facil de entender pq o nome da própria variável ja menciona sobre o que se trata o dado')
console.log();

console.log('--------------Exercício 13------------------------------------------------------------------------');
// Exercício 13 - Tente criar uma variável chamada let 1nome = "x";. Rode e observe o erro. Anote qual é a causa.
// let 1nome = 'x';
console.log('A causa do erro é pq nao se pode nomear uma variável começando com números.')
console.log();

console.log('--------------Exercício 14------------------------------------------------------------------------');
// Exercício 14 - Tente criar uma variável com espaço no nome (ex: let nome cliente = "Ana";). Rode e observe o erro. Anote a causa.
// let nome cliente = 'Ana';
console.log('A msm causa do erro anterior, mas nesse caso é pq nao se pode adc espaço nos nomes das variáveis.')
console.log();

console.log('--------------Exercício 15------------------------------------------------------------------------');
// Exercício 15 - Tente criar uma variável com traço (ex: let nome-cliente = "Ana";). Rode e observe o erro. Anote a causa.
// let nome-cliente = "Ana";
console.log('A msm causa do erro anterior, mas nesse caso é pq nao se pode adc traço "-" nos nomes das variáveis.')
console.log();

console.log('--------------Exercício 16------------------------------------------------------------------------');
// Exercícios - Palavras reservadas
// Exercício 16 - Tente criar let if = 123; e observe o que acontece. Explique por que isso é problema.
// let if = 123;
console.log('Não da certo pq "if" é uma palavra reservada');
console.log();

console.log('--------------Exercício 17------------------------------------------------------------------------');
// Exercício 17 - Tente criar let for = "teste"; e observe o comportamento/erro. Explique.
// let for = 'teste';
console.log('A msm coisa, não da certo pq "for" é uma palavra reservada');
console.log();

console.log('--------------Exercício 18------------------------------------------------------------------------');
// Exercícios - Redeclarar let (erro comum)
// Exercício 18 - Declare let nome = "João"; e depois, mais abaixo no mesmo escopo, declare novamente let nome = "Maria";. Rode e observe o erro. Explique por que falha.
// let nome2 = 'João';
// let nome2 = 'Maria';
console.log('Falha pq ja existe uma variavel com o nome de nome2');
console.log();

console.log('--------------Exercício 19------------------------------------------------------------------------');
// Exercício 19 - Declare let idade = 20; e depois mude o valor para idade = 21; (sem usar let de novo). Mostre no console antes e depois.
let idade = 20;
idade = 21;
console.log(idade);
console.log();

console.log('--------------Exercício 20------------------------------------------------------------------------');
// Exercícios - Predição da saída (sem executar primeiro)
// Exercício 20
// Considere:
let nome3 = "João";
console.log(nome3);
nome3 = "Gabriel";
console.log(nome3); // Qual será a saída? R: A saída sera Gabriel)
console.log();

console.log('--------------Exercício 21------------------------------------------------------------------------');
// Exercício 21
// Considere:
let cidade1;
console.log(cidade1);
cidade1 = "PR";
console.log(cidade1); // Qual será a saída? R: A saída sera PR)
console.log();

console.log('--------------Exercício 22------------------------------------------------------------------------');
//Exercícios - Desafio (mini-situações)
// Exercício 22 - Crie um “roteiro” com 3 frases usando variáveis: cliente, ano, produto. Depois mude uma das variáveis e mostre as frases novamente.
let cliente = 'João';
let anoRoteiro = 2023;
let produtoRoteiro = 'software';

console.log('Identificamos que o', cliente, 'busca uma solução robusta para otimizar seus processos atuais.');
console.log('Este novo', produtoRoteiro, 'foi desenvolvido com tecnologia de ponta para garantir máxima eficiência operacional.');
console.log('Projetamos que, até o final do', anoRoteiro, 'a implementação trará uma redução significativa nos custos de manutenção.');
console.log();

cliente = 'Maria';
console.log('Identificamos que o', cliente, 'busca uma solução robusta para otimizar seus processos atuais.');
console.log('Este novo', produtoRoteiro, 'foi desenvolvido com tecnologia de ponta para garantir máxima eficiência operacional.');
console.log('Projetamos que, até o final do', anoRoteiro, 'a implementação trará uma redução significativa nos custos de manutenção.');

console.log('--------------Exercício 23------------------------------------------------------------------------');
// Exercício 23 - Faça um exercício do tipo “história”: let heroi, let vilao, let ano. Use no texto e troque vilao no meio do código.
let heroi = 'Homem Aranha';
let vilao = 'Dr Octopus';
let ano = 2026;

console.log('A cidade pulsa sob o brilho neon das telas de realidade aumentada flutuantes. O ano', ano, 'começou com a promessa de uma revolução tecnológica, mas, como sempre, o crime se adapta mais rápido que a lei. No topo da Torre Oscorp, o', heroi, 'ajusta as lentes de seu traje de nanotecnologia. O visor inteligente detecta um pico de energia anômalo no porto. É uma assinatura familiar, mas mais potente do que qualquer coisa que ele já tenha visto. "Sexta-Feira", ele diz para a IA integrada ao traje, "toca o Pensa em Mim" do Leandro & Leonardo. Preciso de concentração. Enquanto balança entre os arranha-céus, ele vê os tentáculos mecânicos brilhando em verde-esmeralda, rasgando o asfalto. No centro do caos, o', vilao, 'exibe uma versão aprimorada de seu exoesqueleto, alimentado por um mini-reator de fusão. "Parker!" Otto grita, sua voz amplificada. "Você está atrasado para a nossa reunião de prestação de contas!" O combate é frenético.');

vilao = 'Venom';

console.log('De repente, o', vilao, 'aparece, usando a rede 5G de Neo-Verona para hackear a infraestrutura local, controlando drones e semáforos para atacar o', heroi, '. No entanto, o', heroi, 'usa o ambiente a seu favor. Ele desativa as telas de RA, privando o', vilao, 'da sua visão de "realidade sobreposta", e aproveita a breve distração para dar o golpe final. Ele não quer destruir o', vilao, ', mas precisa desativar o reator. Com um movimento preciso, ele dispara uma teia de nano-fibras condutoras, desviando a energia para o chão, onde ela se dissipa inofensivamente. O exoesqueleto do', vilao, 'falha e ele cai, exausto e derrotado. "Você nunca vai vencer, Parker," resmunga o', vilao, '. "O progresso é inevitável." - "Progresso sem responsabilidade é apenas caos,', vilao, '," responde o', heroi, ', prendendo o', vilao, 'com uma teia de contenção. "E Neo-Verona merece mais do que isso." Ele sobe em um telhado alto, olhando para a cidade que jurou proteger. O ano de', ano, 'está apenas começando. Mas, com o', heroi, 'de vigília, o progresso não precisa ser uma ameaça.');
console.log();

console.log('--------------Exercício 24------------------------------------------------------------------------');
// Exercício 24 - Faça um arquivo com 5 variáveis e 5 console.log diferentes, garantindo que você consegue identificar rapidamente o que cada variável representa.
let nome4 = 'Gabriel';
let sobrenome = 'Presense'
let rg = 131995652;
let cpf = 10314713913;
let profissao = 'Desenvolvedor';

console.log('Nome:', nome4);
console.log('Sobrenome:', sobrenome);
console.log('Número de RG:', rg);
console.log('Número do CPF:', cpf);
console.log('Profissão:', profissao);
console.log();

console.log('--------------Exercício 25------------------------------------------------------------------------');
// Exercício 25 - Crie um teste que altere um valor 3 vezes (ex: nome) e imprima em cada etapa para mostrar “como a variável varia”.
let nome5 = 'Arlindo';
console.log(nome5);

nome5 = 'Gabriel';
console.log(nome5);

nome5 = 'Luana';
console.log(nome5)