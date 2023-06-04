// O arquivo index.js é apenas a execução

import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const contaCliente1 = new ContaCorrente(cliente1, 1001);


contaCliente1.depositar(100);
contaCliente1.depositar(-100);
contaCliente1.depositar(100);

const valorSacado = contaCliente1.sacar(50);

contaCliente1.depositar(500);

const cliente2 = new Cliente("Alice", 88822233309);
const contaCliente2 = new ContaCorrente(cliente2, 1002);

contaCliente1.transferir(200, contaCliente2);

console.log(contaCliente1);
console.log(contaCliente2);
console.log(ContaCorrente.numeroDeContas);

