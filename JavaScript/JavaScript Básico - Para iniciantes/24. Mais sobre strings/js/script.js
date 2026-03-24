// Exemplo de escape de aspas em strings com aspas duplas
let umaString = "Um \"texto\"";
console.log('umaString:', umaString);

// Exemplo de escape de barra invertida
let umaString1 = "Um \\texto";
console.log('umaString1:', umaString1);

// Índices: 0 1 2 3 4 5 6 7
let umaString2 = "Um texto";

// Acessar caractere por índice e com charAt()
console.log('umaString2[4]:', umaString2[4]);
console.log('umaString2.charAt(7):', umaString2.charAt(7));

// Concatenar strings (concat, + e template string)
console.log('concat:', umaString2.concat(' em', ' um', ' lindo dia'));
console.log('soma:', umaString2 + ' em um lindo dia.');
console.log('template:', `${umaString2} em um lindo dia.`);

// Pesquisas e correspondências
console.log("indexOf('o', 3):", umaString2.indexOf('o', 3));
console.log("match(/[a-z]/):", umaString2.match(/[a-z]/));

// Substituição e fatiamento
let umaString3 = 'O rato roeu a roupa do rei de roma';
console.log('replace r -> # (global):', umaString3.replace(/r/g, '#'));
console.log('slice(2, 6):', umaString3.slice(2, 6)); // começo=2 até antes de 6
console.log('slice(-5):', umaString3.slice(-5)); // últimos 5 caracteres

// Comprimento da string
let umaString4 = 'O rato roe';
console.log('length:', umaString4.length);

// Dividir em partes
console.log("split(' ', 3):", umaString3.split(' ', 3)); // primeiros 3 elementos

// Transformar caixa de texto
console.log('toLowerCase():', umaString3.toLowerCase());
console.log('toUpperCase():', umaString3.toUpperCase());
