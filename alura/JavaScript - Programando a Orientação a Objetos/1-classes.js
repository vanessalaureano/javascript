class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if(this.saldo >= valor) {
            this.saldo -= valor; // this é o saldo dessa conta, de forma genérica
        } else {
            console.log("O saldo é insuficiente para realizar essa operação.");
        }
    }

    depositar(valor) {
        if(valor > 0) {
            this.saldo += valor;
            console.log("Depósito realizado com sucesso.");
        } else {
            console.log("Valor inválido.");
        }
    }
}

const cliente1 = new Cliente();
const contaCliente1 = new ContaCorrente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
contaCliente1.agencia = 1001;
contaCliente1.saldo = 0;


console.log(cliente1);
console.log(`O saldo atual da conta do cliente ${cliente1.nome} é de R$ ${contaCliente1.saldo}.`);
contaCliente1.depositar(100);
console.log(`O saldo atual da conta do cliente ${cliente1.nome} é de R$ ${contaCliente1.saldo}.`);
contaCliente1.depositar(200);
console.log(`O saldo atual da conta do cliente ${cliente1.nome} é de R$ ${contaCliente1.saldo}.`);
contaCliente1.depositar(-1);
console.log(`O saldo atual da conta do cliente ${cliente1.nome} é de R$ ${contaCliente1.saldo}.`);



contaCliente1.sacar(50);
console.log(`O saldo atual da conta do cliente ${cliente1.nome} é de R$ ${contaCliente1.saldo}.`);
contaCliente1.sacar(200);
console.log(`O saldo atual da conta do cliente ${cliente1.nome} é de R$ ${contaCliente1.saldo}.`);
contaCliente1.sacar(10);
console.log(`O saldo atual da conta do cliente ${cliente1.nome} é de R$ ${contaCliente1.saldo}.`);


const cliente2 = new Cliente();
const contaCliente2 = new ContaCorrente();

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
contaCliente2.agencia = 1001;
contaCliente2.saldo = 0;

console.log(cliente2);

