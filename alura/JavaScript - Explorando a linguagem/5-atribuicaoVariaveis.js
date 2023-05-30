console.log("Trabalhando com atribuição de variáveis");

let nome = "Vanessa";
const sobrenome = "Laureano";

console.log(nome + sobrenome);
console.log(nome, + sobrenome); // A vírgula funciona como separador de itens, ela dá um espaço DEU ERRADO
console.log(nome + " " + sobrenome); // Concatenação de texto, para dar um espaço

console.log(`Meu nome é ${nome} ${sobrenome}.`);

// const é constante e let é variável

nome = nome + sobrenome;
console.log(nome);

const nomeCompleto = nome + sobrenome; //const em uma linha só
console.log(nome);

let contador = 0;
contador = contador + 1;

let idade; // declarando a variável; let em mais de uma linha
idade = 32; // atribuindo valor
idade = idade + 1;
console.log(idade);