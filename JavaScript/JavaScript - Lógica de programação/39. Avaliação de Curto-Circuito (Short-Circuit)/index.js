/*
&& -> Todas as expressões precisão ser verdadeiras para ser true
|| -> Todas as expressões precisão ser falsas para ser false

*false = literal
Valores que podem ser avaliado como falso -> FALSY, 0, '' "" ``, null / undefined, NaN
*/
//console.log('Gabriel Presense' && true && NaN);
/*
console.log('Gabriel' && 'Luana'); //Retorna Luana
console.log('Gabriel' && '' && 'Luana'); //Retorna string vazia
console.log('Gabriel' && null && 'Luana'); //Retorna null
console.log('Gabriel' && NaN && 'Luana'); //Retorna NaN
*/

/* AND &&
function falaOi () {
    return 'Oi';
}

const vaiExecutar = 'joãozinho';

console.log(vaiExecutar && falaOi());
*/

//console.log(0 || false || null || 'Gabriel Presense' || true);
/*
const corUsuario = 'null';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao); //Retorna preto, porque o usuário nao setou uma cor
*/

const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false'; // Retorna esse
const d = false;
const e = NaN;

console.log(a || b || c || d || e);