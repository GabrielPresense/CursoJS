// Factory function (Função fábrica)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join()
        },

        fala(assunto = 'Falando sobre NADA') {
            return `${this.peso} está ${assunto}.`;
        },

        altura: a,
        peso: p,

        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Gabriel', 'Presense', 1.80, 80);
const p2 = criaPessoa('Luana', 'Montesso', 1.53, 62);
const p3 = criaPessoa('Julia', 'Montesso', 1.50, 52);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);


