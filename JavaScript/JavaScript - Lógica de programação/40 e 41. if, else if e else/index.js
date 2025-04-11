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

