class Imbarcazione {
    constructor(nome){
        this.nome = nome;
    }

}

class Nave extends Imbarcazione {
    constructor(nome, porto){
        super(nome);
        this.porto = porto;
    }
}

class Barca extends Imbarcazione {
    constructor(nome, lunghezza) {
        super(nome);
        this.lunghezza = lunghezza;
    }

    get metri() {
        return this.lunghezza;
    }

    set metri(value) {
        this.lunghezza = value;
    }
}

class Motoscafo extends Barca {
    constructor(nome, lunghezza, motori){
        super(nome, lunghezza);
        this.motori = motori;
    }
}

function trovaBarca(imbarcazioni){
    let max = {
        nome: undefined,
        lunghezza: -Infinity,
    }
    for(let barca of imbarcazioni){
        if(max.lunghezza < barca.lunghezza){
            max.nome = barca.nome;
            max.lunghezza = barca.lunghezza
        }
    }

    return max.nome;
}

let barca1 = new Barca('Prima', 4);
let barca2 = new Barca('Seconda', 4);
let barca3 = new Barca('Terza', 2);

let x = [barca1, barca2, barca3];

console.log(trovaBarca([]));
