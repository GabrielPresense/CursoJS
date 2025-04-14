//Funcção construtora

/*
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 100;
const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix
*/

/*
// Tipos de formatos
//const data = new Date(2025, 3); // a, m, d, h, M, s, ms
const data = new Date(1744633234587); //Formato mais utilizado
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());// 0 - Domingo, 6 - Sábado
console.log(data.toString());
//console.log(Date.now());
*/
function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = (data.getDate());
    const mes = (data.getMonth()) + 1;
    const ano = (data.getFullYear());
    const hora = (data.getHours());
    const min = (data.getMinutes());
    const seg = (data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);