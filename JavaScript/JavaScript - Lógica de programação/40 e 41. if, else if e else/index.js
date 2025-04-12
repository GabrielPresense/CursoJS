 /*
 Entre 0 - 11 - Bom dia
 Entre 12 - 17 - Boa tarde
 Entre 18 - 23 - Boa noite
 */

 // If pode ser usado sozinho
 // Sempre que utilizado a palavra else, preciso de um if antes
 // Eu posso ter vários else isf na checagem
 // Só posso ter else na checagem
 // Podemos usar condições se, else if,  utilizando apenas if e else
 
 const hora = 1;

 if (hora <= 0 && hora <= 11) {
    console.log('Bom dia');
 } else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde ');
 } else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
 }

 const tenhoGrana = true
 if (tenhoGrana) {
    console.log('Vou sair de casa');
 } else { //Posso eliminar esse e
    console.log('Não vou sair de casa');
 }

 const numero = 10;
 if (numero >= 0) {
   console.log('Sim, o número é maior ou igual a zero.')
 }

 // Se (numero >= 0 && numero <= 5) ocorrer, faça isso {código}
 // Se não faça isso {o código}

 const numero1 = 10;

 if (numero1 >= 0 && numero1<= 5) {
   console.log('O número está entre 0 e 5.');
 } else {
   console.log('O número não está entre 0 e 5');
 }

 const numero2 = 5;

 if (numero2 >= 0 && numero2<= 5) {
   console.log('O número está entre 0 e 5.');
 } else {
   console.log('O número não está entre 0 e 5');
 }

 const numero3 = 10;

 if (numero3 >= 0 && numero3<= 5) {
   console.log('O número está entre 0 e 5.');
 } else if (numero3 >= 6 && numero3 <= 8) {
   console.log('O número está entre 6 e 8.');
 } else if (numero3 >= 9 && numero3 <= 11) {
   console.log('O número está entre 9 e 11.');
 } else {
   console.log('O número não está entre 0 e 11.');
 }

 const numero4 = 12;

 if (numero4 >= 0 && numero4<= 5) {
   console.log('O número está entre 0 e 5.');
 } else if (numero4 >= 6 && numero4 <= 8) {
   console.log('O número está entre 6 e 8.');
 } else if (numero4 >= 9 && numero4 <= 11) {
   console.log('O número está entre 9 e 11.');
 } else {
   console.log('O número não está entre 0 e 11.');
 }

 // Se fizer isso pode alterar o fluxo do código e prejudicar o comportamento.
 const numero5 = 12;

 if (numero5 >= 0 && numero<= 5) {
   console.log('O número está entre 0 e 5.');
 } else if (numero5 >= 6 && numero5 <= 8) {
   console.log('O número está entre 6 e 8.');
 } else if (1 === 1) { // Verdadeira
   console.log('LITERAL'); // Como ela é verdadeira ela para por aqui
 } else if (numero5 >= 9 && numero5 <= 11) { //Verdadeira
   console.log('O número está entre 9 e 11.');
 } else {
   console.log('O número não está entre 0 e 11.');
 }

 console.log('...Aqui vai o resto do código');

 const numero6 = 7;

 if (numero6 <= 10) { // Verdadeira
   console.log('O número é menor ou igual a 10');
 }

 if (numero6 >= 0 && numero6<= 5) {
   console.log('O número está entre 0 e 5.');
 } else if (numero6 >= 6 && numero6 <= 8) {
   console.log('O número está entre 6 e 8.');
 } else if (numero6 >= 9 && numero6 <= 11) {
   console.log('O número está entre 9 e 11.');
 } else {
   console.log('O número não está entre 0 e 11.');
 }

 console.log('...Aqui vai o resto do código');