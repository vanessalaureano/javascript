/*
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
*/

/* Modelo 1: Primeiro testa, depois executa o bloco

var c = 1
while (c <= 6){
    console.log(`Passo ${c}`)
    c++ // c = c + 1
}
*/

// Modelo 2: Primeiro executa o bloco, depois testa

var c = 1
do {
    console.log(`Passo ${c}`)
    c++ // c = c + 1
} while (c <= 6)
