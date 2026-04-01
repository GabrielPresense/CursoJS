// Cenário: Você está criando um sistema para uma loja de jogos.

// Crie uma variável estoque (número) e uma variável produto (string).
// Se o estoque for maior que 10, exiba: "O produto [nome] tem estoque abundante."
// Se o estoque estiver entre 1 e 10, exiba: "O produto [nome] está com estoque baixo."
// Se o estoque for 0, exiba: "O produto [nome] está esgotado."
// Extra: Use uma comparação estrita para garantir que o estoque seja do tipo number.

// Desafio 1
const estoque = 0;
const produto = 'Camiseta'

if (typeof estoque !== 'number') {
    console.log('Erro: O estoque deve ser um número válido.');
} else if (estoque > 10) {
    console.log(`O produto ${produto} está com estoque abundante.`)
} else if (estoque >= 1 && estoque <= 10){
    console.log(`O produto ${produto} está com estoque baixo.`)
} else {
    console.log(`O produto ${produto} está esgotado.`)
};

// Não consegui fazer o Extra

console.log();
console.log('----------------------------------------------------------------------');
console.log();

// Cenário: Sistema de perfil de usuário.

// Crie uma variável nomeUsuario que pode receber uma string ou ser null/undefined.
// Crie uma variável exibicao que deve receber o nomeUsuario.
// Regra: Se nomeUsuario estiver vazio ou for inválido (falsy), a variável exibicao deve receber por padrão a string "Convidado".
// Use apenas uma linha para definir a variável exibicao usando o operador ||.
// No final, exiba: "Bem-vindo, [exibicao]!".

// Desafio 2
const nomeUsuario = null;
const exibicao = nomeUsuario || 'Convidado';

console.log(`Bem-vindo, ${exibicao}!`);

console.log();
console.log('----------------------------------------------------------------------');
console.log();

// Cenário: Uma empresa vai dar bônus baseada no tempo de casa e na pontuação de projetos.

// Crie as variáveis anosDeCasa e projetosConcluidos.
// Regra 1: Se o funcionário tem mais de 5 anos de casa E completou mais de 10 projetos, bônus de 25%.
// Regra 2: Se o funcionário tem mais de 2 anos de casa OU completou mais de 5 projetos, bônus de 10%.
// Regra 3: Caso não cumpra nenhum dos requisitos acima, exiba: "Infelizmente, sem bônus desta vez."
// Atenção: A ordem das verificações importa para que quem tem direito ao bônus maior não receba o menor por engano!

// Desafio 3
const anosDeCasa = 7;
const projetosConcluidos = 17;
const temDireitoABonusMenor = 10;
const temDireitoABonusMaior = 25;

if (anosDeCasa > 5 && projetosConcluidos > 10) {
    console.log(`Tem direito a ${temDireitoABonusMaior}% de bonus.`);
} else if (anosDeCasa > 2 || projetosConcluidos > 5) {
    console.log(`Tem direito a ${temDireitoABonusMenor}% de bonus.`);
} else {
    console.log(`Infelizmente, sem bônus desta vez.`);
}
