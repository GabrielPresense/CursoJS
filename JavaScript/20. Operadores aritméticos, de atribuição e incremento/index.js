/**
* Aritiméticos Básicos + - * /
*
* Adição + se os tipos de dados for number é feito a soma
* const num1 = 5; Tipo Number
* const num2 = 10; Tipo Number
* console.log(num1 + num2); Resultado = 15
*
* Concatenação + se os tipos de dados for number e string é feito a concatenação
* const num1 = '5';
* const num2 = 10;
* console.log(num1 + num2); Resultado = 510
*
* Subtração -
* const num1 = 5;
* const num2 = 10;
* console.log(num1 - num2); Resultado = -5
*
* Multiplicação *
* const num1 = 5;
* const num2 = 10;
* console.log(num1 * num2); Resultado = 50
*
* Divisão /
* const num1 = 5;
* const num2 = 10;
* console.log(num1 / num2); Resultado = 0.5
*
* Outros tipos aritiméticos **
*
* Potenciação ** eleva um número a outro
* const num1 = 2;
* const num2 = 10;
* console.log(num1 ** num2); Resultado = 1024
*
* Resto da divisão %
* const num1 = 10;
* const num2 = 5;
* console.log(num1 % num2); Resultado = 0
*
* Precedência () ** % / * + - 
* const num1 = 5;
* const num2 = 2;
* const num3 = 10;
* console.log(num1 + num2 * num3); Resultado = 25
* como * tem precedência ele é somado primeiro e depois somado com o resto dos números
* Para alterar a precedênci precisa colocar o numero entre ()
*
* Alterando a precedência
* const num1 = 5;
* const num2 = 2;
* const num3 = 10;
* console.log((num1 + num2) * num3); Resultado = 70
* 
*/

/**
* Operadores de Incremento
* let contador = 1;
* contador++; //2
* contador++; //3
* ++contador; //4
* ++contador; //5 - podemos colocar ++ antes ou depois 
* console.log(contador);
*
* let contador = 1;
* console.log(contador++); //++ pós, ele exibe o valor de contador e depois faz a soma resultando em 1
* console.log(contador); //++ preciso de um segundo console para mostrar o resultado, 1 2
*
* console.log(++contador); //++ pré, ele faz a soma e depois exibe o resultado = 2
*/

/**
* Operadores de Decremento
* let contador = 10;
* contador--; //9
* contador--; //8
* --contador; //7
* --contador; //6 - podemos colocar  antes ou depois 
* console.log(contador);
*
* let contador = 10;
* console.log(contador--); //-- pós, ele exibe o valor de contador e depois faz a subtração resultando em 9
* console.log(contador); //-- precisa de um segundo console para mostrar o resultado, 10 9
* let contador = 1;
*
* console.log(--contador); //-- pré, ele faz a subtração e depois exibe o resultado = 9
*/

/** Operadores de atribuição +=
* 
* let contador = 2;
*
* contador += 2;
* console.log(contador); // Resultado = 4
* contador += 2;
* console.log(contador); // Resultado = 6
* contador += 2;
* console.log(contador); // Resultado = 8
*/

/* NaN - Not a number
const num1 = 10;
const num2 = '5';
console.log(num1 * num2);
*/

/* Convertendo string para number
*
* parseInt = Inteiro
* const num1 = 10;
* const num2 = parseInt('5.2');
* console.log(num1 + num2); // Resultado = 15
*
* parseFloat = Retorna os números com as casas decimais
* const num1 = 10;
* const num2 = parseFloat('5.2');
* console.log(num1 + num2); // Resultado = 15.2
*
* Number = Ele mesmo decide o mais ideal
* const num1 = 10;
* const num2 = Number('5.2');
* const num3 = Number('5');
* console.log(num1 + num2); // Resultado = 15.2
* console.log(num1 + num3); // Resultado = 15
*/

const num1 = 10;
const num2 = Number('5.2');
const num3 = Number('5');
console.log(num1 + num2);
console.log(num1 + num3);

