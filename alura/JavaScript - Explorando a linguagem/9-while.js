console.log(`Trabalhando com condicionais \n`);
console.log(`Operadores lógicos encadeados \n`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhado = false
let temPassagemComprada = false;
const destino = "Curitiba";

console.log("Destinos possíveis: \n");
console.log(listaDeDestinos);

const podeComprar = (idadeComprador >= 18 || estaAcompanhado == true);

let contador = 0
let destinoExiste = false;

while (contador < 3) {
    
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa viagem");
} else {
    console.log("Desculpe, não foi possível finalizar a compra.");
}

