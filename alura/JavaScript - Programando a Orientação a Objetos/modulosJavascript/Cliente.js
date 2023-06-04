// Por convenção, quando o nome do arquivo começa com letra maiúscula significa que são arquivos que representam  uma classe.

export class Cliente {
    nome;
    _cpf;

    get cpf() {
        return  this._cpf;
    }

    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }
}