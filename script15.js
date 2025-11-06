class Cuenta {
    constructor(saldoInicial) {
        this._saldo = saldoInicial;
    }
    getSaldo() {
        return this._saldo;
    }
    depositar(monto) {
        if (monto > 0) {
            this._saldo += monto;
            console.log(`Depositado: ${monto}. Nuevo Saldo: ${this._saldo}`);
            return true;
        }
    return false;
    }
    retirar(monto) {
        if (monto > 0 && monto <= this._saldo) {
            this._saldo -= monto;
            console.log(`Retirado: ${monto}. Nuevo Saldo: ${this._saldo}`);
            return true;
        }
    console.log("Fondos insuficientes.");
    return false;
    }
    transferir(monto, cuentaDestino) {
        if (this.retirar(monto)) {
            cuentaDestino.depositar(monto);
            console.log(`Transferencia de ${monto} exitosa.`);
            return true;
        }
    console.log("Transferencia fallida.");
    return false;
    }
}

class CuentaAhorro extends Cuenta {
    constructor(saldoInicial) {
        super(saldoInicial);
    }
}

class CuentaCorriente extends Cuenta {
    constructor(saldoInicial, limiteSobregiro) {
        super(saldoInicial);
        this.limiteSobregiro = limiteSobregiro;
    }
    retirar(monto) {
        if (monto > 0 && monto <= (this._saldo + this.limiteSobregiro)) {
            this._saldo -= monto;
            console.log(`Retirado (sobregiro): ${monto}. Nuevo Saldo: ${this._saldo}`);
            return true;
        }
    console.log("Fondos insuficientes (incluso con sobregiro).");
    return false;
    }
}

const ahorro = new CuentaAhorro(100);
const corriente = new CuentaCorriente(50, 50);
console.log("Retiro de 80 de Cta Corriente (Saldo 50, Límite 50)");
corriente.retirar(80);
console.log("Retiro de 110 de Cta Ahorro (Saldo 100)");
ahorro.retirar(110);
console.log("Transferencia de 50 de Ahorro a Corriente");
ahorro.transferir(50, corriente);
console.log(`Saldo Ahorro Final: ${ahorro.getSaldo()}`);
console.log(`Saldo Corriente Final: ${corriente.getSaldo()}`);