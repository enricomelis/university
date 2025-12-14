// Classe base per tutte le imbarcazioni
class Imbarcazione {
    constructor(nome) {
        this.nome = nome;
    }
}

// Classe derivata per le navi
class Nave extends Imbarcazione {
    constructor(nome, porto) {
        super(nome);
        this.porto = porto;
    }
}

// Classe derivata per le barche
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

// Classe derivata per i motoscafi
class Motoscafo extends Barca {
    constructor(nome, lunghezza, motori) {
        super(nome, lunghezza);
        this.motori = motori;
    }
}

// Funzione per trovare la barca più lunga
function trovaBarca(imbarcazioni) {
    const soloBarche = imbarcazioni.filter(i => i instanceof Barca);
    if (soloBarche.length === 0) return undefined;
    
    const barcaPiuLunga = soloBarche.reduce((max, current) => 
        current.lunghezza > max.lunghezza ? current : max
    , soloBarche[0]);
    
    return barcaPiuLunga.nome;
}