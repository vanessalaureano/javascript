console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// console.log(`Destinos possíveis`);
// console.log(salvador, saoPaulo, rioDeJaneiro);

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
); // array é como nós chamamos listas dentro do JS

console.log(listaDeDestinos);

listaDeDestinos.push(`Curitiba`); // o push adiciona um item na lista

console.log(`Destinos possíveis`);
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1); // o splice remove um item na lista
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]); // o colchetes irá exibir apenas a posição [1]

console.log(listaDeDestinos[1], listaDeDestinos[2]);
