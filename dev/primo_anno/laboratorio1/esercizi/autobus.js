class VeicoloError extends Error {}

class Veicolo {
    #targa;
    #colore;
    #n_ruote;

    constructor(targa, colore, ruote){
        if(
            (typeof targa == "string" && targa.length == 7)
            && (typeof colore == "string" && colore.length > 0)
            && (ruote > 0)
        ) {
            this.#targa = targa;
            this.#colore = colore;
            this.#n_ruote = ruote;
        }
        else throw new VeicoloError("Input invalido");
    }

    get targa() { return this.#targa; }
    set targa(t){
        if(t.length === 7) this.#targa = t;
        else throw new VeicoloError();
    }

    get colore() { return this.#colore; }
    set colore(c){
        if(typeof c === "string" && c.length > 0) this.#colore = c;
        else throw new VeicoloError();
    }

    get n_ruote() { return this.#n_ruote; }
    set n_ruote(n) {
        if(n > 0) this.#n_ruote = n;
        else throw new VeicoloError();
    }

    toString(){
        return `${this.#targa}` + `${this.#n_ruote}` + `${this.#colore}`;
    }
}

class Autobus extends Veicolo {
    #targa;
    #colore;
    #n_ruote;
    #n_porte;
    constructor(targa, colore, porte){
        super(targa, colore, 4);
        this.#targa = targa;
        this.#colore = colore;
        this.#n_ruote = 4;
        if(porte > 0) this.#n_porte = porte;
        else throw new VeicoloError();
    }

    get n_porte() { return this.#n_porte; }
    set n_porte(p){
        if( p > 0 ) this.#n_porte = p;
        else throw new VeicoloError();
    }

    toString(){
        return this.#targa + String(this.#n_ruote) + this.#colore + String(this.#n_porte);
    }
}