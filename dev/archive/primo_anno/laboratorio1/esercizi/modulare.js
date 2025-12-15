class BadOpError extends Error {
    constructor(m){
        super(m);
        this.name = "BadOpError";
    }
}

class NumeroModulare {
    #v;
    #m;

    constructor(v, m){
        this.#v = v;
        this.#m = m;
    }

    get v(){ return this.#v; }
    get m(){ return this.#m; }

    add(n) {
        if(n.m !== this.#m) 
            throw new BadOpError("Le basi devono essere le stesse.");
        
        let sum = n.v + this.#v;
        return new NumeroModulare(sum, this.#m);
    }

    equal(n){
        return (n.v % n.m === this.#v % this.#m) ? true : false;
    }

    toString(){
        return `[${this.#v % this.#m}%${this.#m}]`;
    }
}