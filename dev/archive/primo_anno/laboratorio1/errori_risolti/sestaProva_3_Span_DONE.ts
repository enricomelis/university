enum Stile{
    Corsivo,
    Grassetto, 
    Sottolineato,
}

interface MioChar {
    val: string;
    style?: Stile[];
}

class Span extends String {
    private miaStringa: MioChar[];

    constructor(str: string){
        super();
        this.miaStringa = [];

        for(let i = 0; i < str.length; i++){
            this.miaStringa[i] = {
                val: str[i]
            }
        }
    }

    setStyle(start: number, end: number, style: Stile[]){
        if(start < 0 || end < 0 || start >= this.miaStringa.length || end >= this.miaStringa.length || start > end){
            throw new Error("Inserire indici validi per la stringa di lunghezza " + this.miaStringa.length);
        }

        for(let i = start; i <= end; i++){
            this.miaStringa[i].style = style;
        }
    }

    *toCode(): Generator<string>{
        let i = 0;
        while(i < this.miaStringa.length){
            let output = this.miaStringa[i].val;
            if(this.miaStringa[i].style?.includes(Stile.Corsivo) && !output.includes("<I>"))
                output = "<I>" + output + "</I>";
            if(this.miaStringa[i].style?.includes(Stile.Grassetto) && !output.includes("<B>"))
                output = "<B>" + output + "</B>";
            if(this.miaStringa[i].style?.includes(Stile.Sottolineato) && !output.includes("<U>"))
                output = "<U>" + output + "</U>";

            yield output;
            i++;
        }
    }
}

// ! ERRORI:
// non avevo gestito correttamente gli stili, ora ce ne possono essere 
//     più di uno per ogni sottostringa.
// inoltre mancava l'incremento nel generatore.