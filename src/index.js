const readline = require('readline');

function validarBandeira(numeroCartao) {
    const bandeiras = [
        { nome: "MasterCard", prefixos: ["51", "52", "53", "54", "55"] },
        { nome: "Visa", prefixos: ["4"] },
        { nome: "American Express", prefixos: ["34", "37"] },
        { nome: "Diners Club", prefixos: ["300", "301", "302", "303", "304", "305", "36", "38"] },
        { nome: "Discover", prefixos: ["6011", "65"] },
        { nome: "EnRoute", prefixos: ["2014", "2149"] },
        { nome: "JCB", prefixos: ["2131", "1800", "35"] },
        { nome: "Voyager", prefixos: ["8699"] },
        { nome: "HiperCard", prefixos: ["38", "60"] },
        { nome: "Aura", prefixos: ["50"] },
    ];

    for (const bandeira of bandeiras) {
        for (const prefixo of bandeira.prefixos) {
            if (numeroCartao.startsWith(prefixo)) {
                return bandeira.nome;
            }
        }
    }

    return "Bandeira desconhecida";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntarNumeroCartao() {    
    rl.question("Digite o número do cartão (ou 'sair' para encerrar): ", (numeroCartao) => {        
        if (numeroCartao.toLowerCase() === 'sair') {
            console.log("Encerrando o programa.");
            rl.close();
        } else {
            console.log(`Bandeira: ${validarBandeira(numeroCartao)}`);
            perguntarNumeroCartao();
        }
    });
}

perguntarNumeroCartao();