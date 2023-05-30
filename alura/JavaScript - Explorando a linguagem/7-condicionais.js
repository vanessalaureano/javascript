console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 12;
const estaAcompanhado = true

if (idadeComprador >= 18) {
    listaDeDestinos.splice(1, 1);
    console.log("Comprador maior de idade");
    console.log("Destinos possíveis:");
    console.log(listaDeDestinos);
} else if (estaAcompanhado == true) {
    listaDeDestinos.splice(1, 1);
    console.log("Comprador está acompanhado do responsável legal.");
    console.log("Destinos possíveis:");
    console.log(listaDeDestinos);
} else {
    console.log(`Comprador não é maior de idade. Não é possível comprar o pacote.`);
}

// console.log(idadeComprador > 18); // atribuição de valor
// console.log(idadeComprador < 18); // atribuição de valor
// console.log(idadeComprador >= 18); // atribuição de valor
// console.log(idadeComprador <= 18); // atribuição de valor
// console.log(idadeComprador == 18); // comparação