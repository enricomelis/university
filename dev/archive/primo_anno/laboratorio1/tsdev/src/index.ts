class Allenatore {
    private nome: string;
    private cognome: string;
    private email: string;
    private atleti: Atleta[];

    constructor(n: string, c: string, e: string, a?: Atleta[]){
        this.nome = n;
        this.cognome = c;
        this.email = e;
        this.atleti = (a) ? a : [];
    }

    nuovoEsercizio(atl: Atleta, elems: Elemento[]): Esercizio{
        const esercizio: Esercizio = {
            El_1: elems[0],
            El_2: elems[1],
            El_3: elems[2],
            El_4: elems[3],
            El_5: elems[4],
            El_6: elems[5],
            El_7: elems[6],
            El_8: elems[7],
        };

        atl.addEsercizio = esercizio;
        return esercizio;
    }
}

class Atleta {
    private nome: string;
    private cognome: string;
    private email: string;
    private allenatore: Allenatore;
    private esercizi: Esercizio[];

    constructor(nome: string, cognome: string, email: string, allenatore: Allenatore) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.allenatore = allenatore;
        this.esercizi = [];
    }

    set addEsercizio(e: Esercizio){
        this.esercizi.push(e);
    }
}

interface Elemento {
    nome?: string;
    valore: number;
    attrezzo: Attrezzo;
    gruppo: Gruppo;
}

type Elem_Esercizio = Elemento | null;

interface Esercizio {
    El_1: Elem_Esercizio;
    El_2: Elem_Esercizio;
    El_3: Elem_Esercizio;
    El_4: Elem_Esercizio;
    El_5: Elem_Esercizio;
    El_6: Elem_Esercizio;
    El_7: Elem_Esercizio;
    El_8: Elem_Esercizio;
}

enum Attrezzo {
    Corpo_Libero = 1,
    Cavallo_con_Maniglie,
    Anelli,
    Volteggio,
    Parallele_Pari,
    Sbarra,
}

enum Gruppo {
    A = 1,
    B,
    C,
    D
}

// ---

const david = new Allenatore("David", "Ghilarducci", "");
const simo = new Atleta("Simone", "Houriya", "", david);
const anelliElements: Elemento[] = [
    { nome: "Croce", valore: 9.5, attrezzo: Attrezzo.Anelli, gruppo: Gruppo.A },
    { nome: "Planche", valore: 9.0, attrezzo: Attrezzo.Anelli, gruppo: Gruppo.B },
    { nome: "Malta", valore: 8.5, attrezzo: Attrezzo.Anelli, gruppo: Gruppo.C },
    { nome: "Inverted Cross", valore: 9.2, attrezzo: Attrezzo.Anelli, gruppo: Gruppo.A },
    { nome: "Iron Cross", valore: 9.8, attrezzo: Attrezzo.Anelli, gruppo: Gruppo.B },
    { nome: "Swing to Handstand", valore: 8.7, attrezzo: Attrezzo.Anelli, gruppo: Gruppo.C },
    { nome: "L-Sit", valore: 8.0, attrezzo: Attrezzo.Anelli, gruppo: Gruppo.D },
    { nome: "Back Lever", valore: 8.9, attrezzo: Attrezzo.Anelli, gruppo: Gruppo.A },
];

const simo_anelli = david.nuovoEsercizio(simo, anelliElements);
console.log(simo_anelli);