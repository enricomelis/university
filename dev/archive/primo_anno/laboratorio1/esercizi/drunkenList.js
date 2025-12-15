class Nodo {
    value;
    next;
    prec;

    constructor(v, n, p){
        this.value = v;
        this.next = n;
        this.prec = p;
    }
}

class DrunkenList{
    #length;
    #head;
    constructor(){
        this.#length = 0;
    }

    get length(){ return this.#length; }
    get head(){ return this.#head; }

    push(nodo){
        if(this.#length === 0){
            this.#head = nodo;
            this.#length++;
        }
        else {
            if(this.#length % 2 === 0){
                let testa = this.#head;
                this.#head = nodo;
                nodo.next = testa;
                testa.prec = nodo;
                this.#length++;
            }
            else {
                let curr = this.#head;
                while(curr.next !== null)
                    curr = curr.next;
                curr.next = nodo;
                nodo.prec = curr;
                
                let x = new Nodo(nodo.value, null, null);
                let prec_head = this.#head;
                this.#head = x;
                x.next = prec_head;
                prec_head.prec = x;
                this.#length += 2;
            }
        }
        
    }

    pop(){
        if(this.#length === 0)
            throw new ReferenceError("La lista è vuota. ");
        if(this.#length % 2 === 0){
            let curr = this.#head;
            while(curr.next.next !== null)
                curr = curr.next;
            
            let res = curr.next;
            curr.next = null;
            res.prec = null;
            this.#length--;
            return res;
        }
        else {
            let res = this.#head;
            this.#head = res.next;
            this.#head.prec = null;
            res.next = null;
            
            this.#length--;
            return res;
        }
    }

    as_array(){
        let res = [];
        let curr = this.#head;
        while(curr.next !== null){
            res.push(curr.value);
            curr = curr.next;
        }
        res.push(curr.value);                       // altrimenti l'ultimo nodo non sarebbe inserito.

        return res;
    }

    toString(){
        let res = "NULL";
        
        for(let el of this.as_array())
            res += " <- " + String(el) + " -> ";
        res += "NULL."
        return res;
    }
}

let dl = new DrunkenList();
let x = new Nodo(3, null, null);
let y = new Nodo(4, null, null);
let z = new Nodo(5, null, null);
let a = new Nodo(6, null, null);
let b = new Nodo(7, null, null);
let c = new Nodo(8, null, null);

dl.push(x);
dl.push(y)
dl.push(z);
console.log("Lunghezza dopo tre push ", dl.length, dl.toString());
dl.pop();
console.log("Lunghezza dopo una pop: ", dl.length, dl.toString());
dl.pop();
console.log("Lunghezza dopo una pop: ", + dl.length, dl.toString());
dl.push(a);
console.log("Lunghezza dopo una push ", dl.length, dl.toString());
dl.pop();
console.log("Lunghezza dopo una pop: ", + dl.length, dl.toString());
dl.push(b);
console.log("Lunghezza dopo una push ", dl.length, dl.toString());
dl.push(c);
console.log("Lunghezza dopo una push ", dl.length, dl.toString());