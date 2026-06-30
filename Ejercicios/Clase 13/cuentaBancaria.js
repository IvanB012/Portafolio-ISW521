class CuentaBancaria {
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
    }   
    get saldo() {
        return this._saldo;
    }
    set saldo(valor) {
        if (valor < 0) {
            throw new Error("El saldo no puede ser negativo");
        }
        this._saldo = valor;
    }
}

const cuenta = new CuentaBancaria(1000);
cuenta.saldo = 1500; // Establece el saldo a 500
console.log(cuenta.saldo); // 1500  
