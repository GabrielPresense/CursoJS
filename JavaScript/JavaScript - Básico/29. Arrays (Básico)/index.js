//Arays é um objeto indexado utilziado para criar coleção de coisas, tipo listas e entre outras

//            0123456789...... continuação
const nome = 'Gabriel Presense';
console.log(nome[0]); // Mostra a letra que pertence aquele indice especificado
//------------------------------------------------------------------
//                0        1        2
const alunos = ['Luiz', 'Maria', 'João']; //É recomendado que mantenha a array com apenas um tipo de dado, ou apenas com string ou Number e assim em diante
console.log(alunos);

//------------------------------------------------------------------

alunos.push('Gabriel'); // Adiciona no fim da array, e é a melhor forma para adicionar 
alunos.push('Fábio');
console.log(alunos);

//------------------------------------------------------------------

alunos.unshift('Gabriela'); // Adiciona no começo do array
alunos.unshift('Luana');
console.log(alunos);

//------------------------------------------------------------------

alunos.pop(); // Remove o último elemento do array
console.log(alunos); // Removeu Fábio

//------------------------------------------------------------------

const removidofim = alunos.pop(); // Remove o último elemento do array, foi removido o Gabriel
console.log(removidofim); // E mostra quem foi removido
console.log(alunos); // E mostra o array atual

//------------------------------------------------------------------

alunos.shift(); // Remove o primeiro elemento do array
console.log(alunos); // Removeu Luana

//------------------------------------------------------------------

const removidoinicio = alunos.shift(); // Remove o primeiro elemento do array, foi removido o Gabriela
console.log(removidoinicio); // E mostra quem foi removido
console.log(alunos); // E mostra o array atual

//------------------------------------------------------------------

//                0        1        2           3       4
const alunos1 = ['Luiz', 'Maria', 'João']; // Luiza, Eduardo
alunos1.push('Luiza');
alunos1.push('Eduardo');
console.log(alunos1); // Mostra o Array inteiro
console.log(alunos1.slice(0,3)); // Mostra o Array fatiado
console.log(alunos1.slice(1,4));
console.log(alunos1.slice(0,-1));
console.log(typeof alunos1); // Mostra o tipo do Array = Object

//------------------------------------------------------------------

console.log(alunos1 instanceof Array); // Pergunta se isso é um array, se sim true, se nao, false
const numero = 1234; // False, nao é um array
console.log(numero instanceof Array); 

//------------------------------------------------------------------

delete alunos[1]; // Delete um elemento de um indice especifico, porem ele fica vázio
console.log(alunos);
console.log(alunos[1]); // Exibe undefined

//------------------------------------------------------------------

console.log(alunos.length); // Mostra o tamanho da arrays

//------------------------------------------------------------------

console.log(alunos[0]); // Buscando elementos separados na array
console.log(alunos[1]);
console.log(alunos[2]);

//------------------------------------------------------------------

/*
alunos[0] = 'Eduardo'; // Alteração dos dados na arrays pelo indice
alunos[3] = 'Luiza'; // Adicionando elementos na arrays utilizando colchetes
console.log(alunos);
*/
