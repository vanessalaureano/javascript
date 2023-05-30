console.log(`Trabalhando com condicionais \n`);
console.log(`Operadores lógicos encadeados \n`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhado = false
const temPassagemComprada = true;

if (idadeComprador >= 18 || estaAcompanhado == true
    ) {
    listaDeDestinos.splice(1, 1);
    console.log("Comprador maior de idade ou está acompanhado do responsável legal \n");
    console.log("Destinos possíveis: \n");
    console.log(listaDeDestinos);
} else {
    console.log(`Comprador não é maior de idade e não está acompanhado do responsável legal. Não é possível comprar o pacote. \n`);
}

console.log(`Embarque: \n`);

if (idadeComprador >= 18 && temPassagemComprada == true) {
    console.log(`Boa viagem!`);
} else {
    console.log(`Não é possível o embarque.`)
}

// || - ou
// && - e