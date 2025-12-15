class BadTreeError extends Error {
    constructor(message) {
        super(message);
        this.name = "BadTreeError";
    }
}

class BNodePost {
    #val;                               // number
    #label;                             // string
    #children = []                      // BNodePost[2]

    constructor(val, label = "") {
        this.#val = val;
        this.#label = label;
    }

    get val() { return this.#val; }
    get label() { return this.#label; }

    add(...nodi) {
        if (nodi.length + this.#children.length > 2)
            throw new BadTreeError("Non si possono inserire più di due nodi.");

        this.#children.push(...nodi);
    }

    *visit() {
        for (let el of this.#children) {
            yield* el.visit();          // caso ricorsivo: il nodo ha dei figli nell'array
        }
        yield this.#val;                // caso base: dopo aver processato i figli, processo il nodo
    }
}
