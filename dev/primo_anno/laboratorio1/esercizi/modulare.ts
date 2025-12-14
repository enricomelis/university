class BadOpError extends Error {
    constructor(m: string){
        super(m);
        this.name = "BadOpError";
    }
}

class NumeroModulare {
    #v: number;
    #m: number;

    constructor(v: number, m: number){
        this.#v = v;
        this.#m = m;
    }

    get v(): number { return this.#v; }
    get m(): number { return this.#m; }

    add(n: NumeroModulare): NumeroModulare {
        if(n.m !== this.#m)
            throw new BadOpError("Le basi devono essere le stesse.");

        return new NumeroModulare(n.v + this.#v, this.#m);
    }

    equal(n: NumeroModulare): boolean { 
        return (n.v % n.m === this.#v % this.#m) ? true : false; 
    }

    toString(): string {
        return `[${this.#v % this.#m}%${this.#m}]`;
    }
}