enum Stile {
    Grassetto,
    Corsivo, 
    Sottolineato
}

interface MiaStringa {
    value: string,
    style: Stile | undefined,
}

class Span extends String {
    private stringa: MiaStringa[];

    constructor(str: string){
        super();
        this.stringa = [];
        for(let i = 0; i < str.length; i++){
            this.stringa.push({value: str[i], style: undefined});
        }
    }

    setStyle(start: number, end: number, style: Stile){
        if(start < 0 || start >= this.stringa.length || start > end){
            throw new Error("Start deve essere un indiice di un carattere della stringa.");
        }
        else if(end < 0 || end >= this.stringa.length){
            throw new Error("Start deve essere un indiice di un carattere della stringa.");
        }

        for(let i = start; i <= end; i++){
            this.stringa[i].style = style;
        }
    }

    // assumo che ogni carattere possa avere un solo stile
    *toCode(): Generator<string>{
        let i = 0;
        while(i < this.stringa.length){
            if(this.stringa[i].style == Stile.Corsivo){
                yield `<I>${this.stringa[i]}</I>`;
            }
            else if(this.stringa[i].style == Stile.Grassetto){
                yield `<B>${this.stringa[i]}</B>`;
            }
            else if(this.stringa[i].style == Stile.Sottolineato){
                yield `<U>${this.stringa[i]}</U>`;
            }
            else {
                yield `${this.stringa[i]}`;
            }
        }
    }
}