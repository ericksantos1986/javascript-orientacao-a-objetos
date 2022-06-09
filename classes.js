class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(value) {
        this._saldo = value;
    }

    sacar(saque) {
        if(saque > this._saldo){
            return 'Operação negada';
        }
        this._saldo = this._saldo - saque;

        return `Saque efetuado, seu novo saldo é de: ${this._saldo}`;
    }
    
    depositar(deposito) {
        this._saldo = this._saldo + deposito;

        return `Depósito efetuado, seu novo saldo é de: ${this._saldo}`;
    }
    
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoDeCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoDeCredito = cartaoDeCredito;
    }

    get cartaoDeCredito() {
        return this._cartaoDeCredito;
    }

    set cartaoDeCredito(value) {
        this._cartaoDeCredito = value;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';

    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitária'
    }

    sacar(saque) {
        super.sacar();
        if(saque > 500) {
            return 'Operação negada';
        }

        this._saldo = this._saldo - saque;

        return `Saque efetuado, seu novo saldo é de: ${this._saldo}`;
    }
}
