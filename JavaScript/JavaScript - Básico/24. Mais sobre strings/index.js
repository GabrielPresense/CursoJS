//               0123456789
let umaString = 'O rato roeu a roupa do rei de roma.';
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());

/*
// Fatiamento
console.log(umaString.length -3);
console.log(umaString.slice(-5, -1));
console.log(umaString.substring(umaString.length -5, umaString.length - 1));
*/

//console.log(umaString[4]); //Pega o caractere que esta na posição especificada

//console.log(umaString.charAt(8)); //Mesma coisa que a de cima

/*
//Concatenando valores
console.log(umaString.concat(' em', ' um', ' lindo', ' dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`); //Melhor forma
*/

/*
Busca o index da palavra
console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('o', 3)); // Buscar da Esquerda p/ Direita
console.log(umaString.lastIndexOf('m', 3)); // Busca da Direira p/ Esquerda
*/


/*
//Expressões regulares
console.log(umaString.match(/[a-z]/));
console.log(umaString.search(/x/));
console.log(umaString.replace(/r/g, '#'));
*/


// Dividir uma string
console.log(umaString.split(' ', 3));

