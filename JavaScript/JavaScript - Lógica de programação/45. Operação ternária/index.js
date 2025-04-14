// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUsuário = 1000;
// Operação ternária
const nivelUsuario = pontuacaoUsuário >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preto';

console.log(nivelUsuario, corPadrao);
/* Forma padrão
if (pontuacaoUsuário >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
}
*/ 
