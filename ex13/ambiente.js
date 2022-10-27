let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

// console.log(num)

/* 
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
*/

for(let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
} // Versão simplificada. Para mostrar todos os valores dentro da variável composta, ao invés de um por um.

for(let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} // Versão ainda mais simplificada. Para cada posição dentro de 'num' eu vou mostrar o num pos.