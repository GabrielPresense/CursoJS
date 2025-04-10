/*
Operadores de comparação
> Maior que
>= Maior que ou igual a
< Menor que
<= Menor que ou igual a
== Igualdade (valor) - Não utilizamos
=== igualdade estrita (valor e tipo)
!= diferente (valor) - Não utilizamos
!== diferente estrito (valor e tipo)
 */

// > Maior que
const comp = 10 > 5; //true
console.log(comp);
const comp2 = 5 > 10; //false
console.log(comp2);

// >= Maior que ou igual a
const comp3 = 10 >= 5; //true
console.log(comp3);
const comp4 = 10 >= 10; //true
console.log(comp4);
const comp5 = 5 >= 10; //false
console.log(comp5);

// < Menor que
const comp6 = 5 < 10; //true
console.log(comp6);
const comp7 = 15 < 10; //false
console.log(comp7);

// <= Menor que ou igual a
const comp8 = 2 <= 5; //true
console.log(comp8);
const comp9 = 10 <= 10; //true
console.log(comp9);
const comp10 = 15 <= 10; //false
console.log(comp10);

/*
// == Igualdade (valor) - Não utilizamos
const num1 = 10;
const num2 = 10;
const comp11 = num1 == num2;
console.log(comp11); //true

const num3 = 10;
const num4 = 12;
const comp12 = num3 == num4;
console.log(comp12); //false
*/

// === igualdade estrita (valor e tipo)
const num5 = 10; //Number
const num6 = '10'; //String
const comp13 = num5 === num6; 
console.log(comp13); //false

/*
// != diferente (valor) - Não utilizamos
const num7 = 10; //Number
const num8 = 10; //String
const comp14 = num7 != num8; 
console.log(comp14); //false

const num9 = 10; //Number
const num10 = 12; //String
const comp15 = num9 != num10; 
console.log(comp15); //true
*/

// !== diferente estrito (valor e tipo)
const num11 = 10; //Number
const num12 = '10'; //String
const comp16 = num11 !== num12; 
console.log(comp13); //false

const num13 = 10; //Number
const num14 = 12; //Number
const comp17 = num13 !== num14; 
console.log(comp17); //true