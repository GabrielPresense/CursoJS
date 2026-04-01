/*
&& -> "false && true" Ambas tem que ser verdadeira para retornar verdadeira
|| -> "true && false" Vai retornar o valor verdadeiro

FALSY
false
0
'' "" ``
null / undefined
NanN
*/

const a = 0;
const b = null;
const c = 'false'; // Exibe essa pois a const c esta como false dentro de string então pe verdadeiro
const d = false;
const e = NaN;

console.log(a || b || c || d || e);