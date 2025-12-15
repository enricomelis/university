class OperazioneInvalida extends Error {}
class TooLow extends Error {}
class TooMuch extends Error {}

class ContoPostale {
    #saldo;
    #scoperto;

    constructor(saldo, scoperto){
        if(saldo <= 0) throw new OperazioneInvalida("Saldo iniziale deve essere maggionre di 0.");
        this.#saldo = saldo;
        this.#scoperto = scoperto;
    }

    set saldo(s) {this.#saldo = s}
    set scoperto(s) {this.#scoperto = s}

    get saldo(){ return this.#saldo; }
    get scoperto() { return this.#scoperto; }

    deposito(valore){
        if(valore < 0) throw new OperazioneInvalida("Inserire valore maggiore di 0.");
        if(valore === 0) throw new TooLow("Inserire valore maggiore di 0.");

        this.#saldo += valore;
        return this.#saldo;
    }

    prelievo(valore){
        if(valore < 0) throw new OperazioneInvalida("Inserire valore maggiore di 0.");
        if(valore > this.#saldo - this.#scoperto) throw new TooMuch("Non c'è abbastanza saldo.");

        this.#saldo -= valore;
        return this.#saldo;
    }
}

function applica(conto, depositi, prelievi){
    if(depositi.length !== prelievi.length) throw new Error("Gli array devono avere lunghezza uguale.");
    
    let temp = new ContoPostale(conto.saldo, conto.scoperto);
    
    
    try {
        for(let i = 0; i < depositi.length; i++){
            conto.deposito( depositi[i] );
            conto.prelievo( prelievi[i] );
        
        }   
        return true;
    }
    catch (e){
        conto.saldo = temp.saldo;
        conto.scoperto = temp.scoperto;
        if(e instanceof OperazioneInvalida) throw e;
        else return false;
    }
}