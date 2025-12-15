class InvalidMoney extends Error {}
class ExcessiveMoney extends Error {}
class InsufficientMoney extends Error {}

class ContoBancario {
    constructor(saldoIniziale, massimale){
        if(saldoIniziale < 0  || massimale < 0)
            throw new InvalidMoney("Inserire valori positivi.");
        else {
            this.saldo = saldoIniziale;
            this.massimale = massimale;
        }
    }

    deposito(valore) {
        if(valore < 0)
            throw new InvalidMoney("Inserire valori positivi.");
        else if (valore + this.saldo > this.massimale)  
            throw new ExcessiveMoney("Non si può superare il massimale.");
        else {
            this.saldo += valore;
            return this.saldo;
        }
    }

    prelievo(valore) {
        if(valore < 0)
            throw new InvalidMoney("Inserire valori positivi.");
        else if (valore > this.saldo)
            throw new InsufficientMoney("Saldo insufficiente.");
        else {
            this.saldo -= valore;
            return this.saldo;
        }
    }

}

function applica(conto, depositi, prelievi){
    // conto: ContoBancario
    // depositi: number[]
    // prelievi: number[]
    
    if(depositi.length !== prelievi.length)
        return false;

    let x = new ContoBancario(conto.saldo, conto.massimale);
    
    for(let i in depositi) {
        if(depositi[i] < 0 || prelievi[i] < 0){
            throw new InvalidMoney("Inserire valori positivi");
        }
    }

    for(let i in depositi) {
        try {
            x.deposito( depositi[i] );
            x.prelievo( prelievi[i] );
        } catch (error) {
            return false;
        }
    }
    
    return true;
}
