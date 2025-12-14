"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Allenatore {
    constructor(n, c, e, a) {
        this.nome = n;
        this.cognome = c;
        this.email = e;
        this.atleti = (a) ? a : [];
    }
    nuovoEsercizio(atl, elems) {
        const esercizio = {
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
    constructor(nome, cognome, email, allenatore) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.allenatore = allenatore;
        this.esercizi = [];
    }
    set addEsercizio(e) {
        this.esercizi.push(e);
    }
}
var Attrezzo;
(function (Attrezzo) {
    Attrezzo[Attrezzo["Corpo_Libero"] = 1] = "Corpo_Libero";
    Attrezzo[Attrezzo["Cavallo_con_Maniglie"] = 2] = "Cavallo_con_Maniglie";
    Attrezzo[Attrezzo["Anelli"] = 3] = "Anelli";
    Attrezzo[Attrezzo["Volteggio"] = 4] = "Volteggio";
    Attrezzo[Attrezzo["Parallele_Pari"] = 5] = "Parallele_Pari";
    Attrezzo[Attrezzo["Sbarra"] = 6] = "Sbarra";
})(Attrezzo || (Attrezzo = {}));
var Gruppo;
(function (Gruppo) {
    Gruppo[Gruppo["A"] = 1] = "A";
    Gruppo[Gruppo["B"] = 2] = "B";
    Gruppo[Gruppo["C"] = 3] = "C";
    Gruppo[Gruppo["D"] = 4] = "D";
})(Gruppo || (Gruppo = {}));
// ---
const david = new Allenatore("David", "Ghilarducci", "");
const simo = new Atleta("Simone", "Houriya", "", david);
const anelliElements = [
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
//# sourceMappingURL=index.js.map