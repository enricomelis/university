class SectorError extends Error {}

class Stadio {
    #casa = [];
    #ospiti = [];

    constructor(m, n){
        for(let i = 0; i<m; i++)
            this.#ospiti[i] = true;
        for(let i = 0; i<n; i++)
            this.#casa[i] = true;
    }

    get posti(){
        return [this.#casa, this.#ospiti]
    }

    prenota_posto(s, i){
        if(s !== "casa" && s !== "ospiti")
            throw new SectorError("Settore non esistente");

        switch(s){
            case "casa":
                if(this.#casa[i] === true) {
                    this.#casa[i] = false;
                    return true;
                }
                else return false;
            case "ospiti":
                if(this.#ospiti[i] === true) {
                    this.#ospiti[i] = false;
                    return true;
                }
                else return false;
        }
    }

    posti_liberi(s) {
        if(s !== "casa" && s !== "ospiti")
            throw new SectorError("Settore non esistente");

        let ctr = 0;
        if(s === "casa"){
            for(let el of this.#casa)
                if(el === true) ctr++;
        }
        if(s === "ospiti"){
            for(let el of this.#ospiti)
                if(el === true) ctr++;
        }
        return ctr;
    }

    is_full() {
        for(let el of this.#casa)
            if(el === true) return false;
        for(let el of this.#ospiti)
            if(el === true) return false;
        return true;
    }

    svuota_stadio() {
        for(let i = 0; i<this.#casa.length; i++)
            this.#casa[i] = true;
        for(let i = 0; i<this.#ospiti.length; i++)
            this.#ospiti[i] = true;
    }
}