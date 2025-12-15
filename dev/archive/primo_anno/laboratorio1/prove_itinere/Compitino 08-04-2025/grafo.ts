class Nodo<T> {
    public label: T;

    constructor(l: T){
        this.label = l;
    }
}

class Arco<T> {
    public da: Nodo<T>;
    public a: Nodo<T>;

    constructor(da: Nodo<T>, a: Nodo<T>){
        this.da = da;
        this.a = a;
    }
    
}

type Riga = -1 | 0 | 1;

function isEntrante<T>(nodoInUscita: Nodo<T>, nodoInEntrata: Nodo<T>, array: Arco<T>[]): boolean{
    for(let el of array){
        if(el.da == nodoInUscita && el.a == nodoInEntrata)
            return true
    }
    return false;
}


class Grafo<T> {
    public nodi: Nodo<T>[];
    public archi: Arco<T>[];

    constructor(n: Nodo<T>[], a: Arco<T>[]){
        this.nodi = n;
        this.archi = a;
    }

    matrAdj(): Riga[][]{
        let res: Riga[][] = [];
        let len: number = this.nodi.length;
        for(let i = 0; i < len; i++){
            res.push([]);
        }

        for(let i = 0; i < len; i++){
            for(let j = 0; j < len; j++){
                if( isEntrante(this.nodi[i], this.nodi[j], this.archi) ) {
                    res[i][j] = 1
                }
                else if( isEntrante(this.nodi[j], this.nodi[i], this.archi) ){
                    res[i][j] = -1
                }
                else {
                    res[i][j] = 0
                }
            }
        }

        return res;
    }

    matrInc(): Riga[][]{
        let res: Riga[][] = [];
        let n: number = this.nodi.length;
        let m: number = this.archi.length;

        for(let i = 0; i < n; i++){
            res.push([]);
        }
        // n_rige: n_nodi
        // n_colonne: n_archi

        for(let i = 0; i < n; i++){
            for(let j = 0; j < m; j++){
                // se il nodo i-esimo è il "da" dell'arco i-j
                if( this.nodi[i] == this.archi[j].da ){
                    res[i][j] = 1;
                }
                // se il nodo i-esimo è il "a" dell'arco i-j
                else if( this.nodi[i] == this.archi[j].a ){
                    res[i][j] = -1;
                }
                // se il nodo non appartiene all'arco i-j
                else {
                    res[i][j] = 0;
                }
            }
        }

        return res;
    }
}

let a: Nodo<string> = new Nodo("a");
let b: Nodo<string> = new Nodo("b");
let c: Nodo<string> = new Nodo("c");
let d: Nodo<string> = new Nodo("d");

let archi: Arco<string>[] = [
    new Arco<string>(a, b),
    new Arco<string>(a, d),
    new Arco<string>(b, c),
    new Arco<string>(c, d),
    new Arco<string>(d, b),
];

let grafo = new Grafo<string>([a, b, c, d], archi);
let matrInc: Riga[][] = grafo.matrAdj();
console.log(matrInc);



