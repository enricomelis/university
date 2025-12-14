class FormazioneErrata extends Error {}

enum Ruolo {
    Riserva = 0,
    Titolare,       // 1
    Capitano,       // 2
}

enum Posizione {
    Primo = 100,
    Secondo = 50,
    Terzo = 25,
    Top5 = 10,
    Altro = 0,
}

interface Cantante {
    nome: string;
    ruolo: Ruolo;
    posizione: Posizione;
}

function punteggio(squadra: Cantante[]): number {

    let n_capitano: number = 0;
    let n_titolari: number = 0;
    for(let cantante of squadra){
        if(cantante.ruolo == Ruolo.Capitano)
            n_capitano++;
        else if(cantante.ruolo == Ruolo.Titolare)
            n_titolari++;
    }
    if(n_capitano !== 1 || n_titolari !== 4)
        throw new FormazioneErrata("Ci deve essere un capitano e quattro titolari.");

    let res: number = 0;

    for(let cantante of squadra){
        res += cantante.posizione * cantante.ruolo;
    }

    return res;
}