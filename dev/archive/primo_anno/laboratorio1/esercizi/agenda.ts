type Data = [number, string, number];
type Evento = [Data, string];

class GiornoPienoError extends Error {}

class Agenda {
    private _max: number;
    private _eventi: Evento[] = [];

    constructor(m: number){
        this._max = m;
    }

    aggiungi(e: Evento){
        const data: Data = e[0];
        let ctr: number = 0;
        for(let evento of this._eventi){
            if(evento[0] == data)
                ctr++;
        }
        if(ctr >= this._max)
            throw new GiornoPienoError();
        else 
            this._eventi.push(e);
    }

    private confrontaDate(data1: Data, data2: Data){
        if(data1[0] == data2[0] && data1[1] == data2[1] && data1[2] == data2[2])
            return true
        else return false;
    }

    lista_eventi(d: Data): Evento[]{
        let res: Evento[] = [];
        for(let i = 0; i < this._eventi.length; i++){
            if( this.confrontaDate(d, this._eventi[i][0]) ){
                res.push(this._eventi[i]);
            }
        }
        return res;
    }

    libera(d: Data): number {
    let res: number = 0;

    for (let i = 0; i < this._eventi.length; i++) {
        if (this.confrontaDate(d, this._eventi[i][0])) {
            res++;
            this._eventi.splice(i, 1);
            i--;
        }
    }
    return res;
}
}