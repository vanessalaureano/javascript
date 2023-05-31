class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo = 0;

    sacar(valor) {
        if(this.saldo >= valor) {
            this.saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if(valor <= 0) {
            return;
        }
        this.saldo += valor;
    }
}

const cliente1 = new Cliente();
const contaCliente1 = new ContaCorrente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
contaCliente1.agencia = 1001;
contaCliente1.saldo = 0;


console.log(cliente1);
contaCliente1.depositar(100);
contaCliente1.depositar(-100);
contaCliente1.depositar(100);

const valorSacado = contaCliente1.sacar(50);
console.log(valorSacado);

console.log(contaCliente1);


const cliente2 = new Cliente();
const contaCliente2 = new ContaCorrente();

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
contaCliente2.agencia = 1001;
contaCliente2.saldo = 0;

console.log(cliente2);
console.log(contaCliente2);

