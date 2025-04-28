/* Código padrão
function max(x, y) {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}

console.log(max(1,2));
*/

//Código refatorado
const max = (x, y) => x > y ? x : y;

console.log(max(10, 20));