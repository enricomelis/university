class Nodo<T> {
    #value: T;
    #next: Nodo<T> | undefined;
    #prec: Nodo<T> | undefined;

    constructor(value: T){
        this.#value = value;
        this.#next = undefined;
        this.#prec = undefined;
    }

    get value(): T { return this.#value; }

    get next(): Nodo<T> | undefined { return this.#next; }
    get prec(): Nodo<T> | undefined { return this.#prec; }
    
    set next(nodo: Nodo<T> | undefined){
        this.#next = nodo;
    }

    set prec(nodo: Nodo<T> | undefined){
        this.#prec = nodo;
    }
}

class DrunkenList <T> {
    #length: number = 0;
    #head: Nodo<T> | undefined;

    constructor(){}

    get length(): number { return this.#length; }

    push(obj: T): void {
        if(this.#length % 2 === 0){
            // lunghezza pari: inserimento in testa
            let x = new Nodo<T>(obj);
            if(this.#head == undefined)
                this.#head = x;
            else {
                x.next = this.#head;
                this.#head.prec = x;
                this.#head = x;
            }
            this.#length = this.#length + 1;
        }
        else {
            if(!this.#head) return 
            // lunghezza dispari: inserimento in testa e in coda
            let x = new Nodo<T>(obj);
            let y = new Nodo<T>(obj);

            // inserimento in testa
            x.next = this.#head;
            this.#head.prec = x;
            this.#head = x;

            // inserimento in coda
            let curr: Nodo<T> = this.#head;
            while(curr.next !== undefined)
                curr = curr.next;
            

            curr.next = y;
            y.prec = curr;

            this.#length += 2;
        }
    }

    pop(): Nodo<T> {
        if(!this.#head) throw new ReferenceError("La lista è vuota.");
        if(this.#length % 2 === 0){
            this.#length--;
            // lunghezza pari: pop in coda
            let curr: Nodo<T> = this.#head;
            while(curr.next !== undefined)
                curr = curr.next;

            // qui curr è l'ultimo elemento della lista
            let res: Nodo<T> = new Nodo(curr.value);
            if(curr.prec)
                curr.prec.next = undefined;
            
            return res;
        }
        else {
            this.#length--;
            // lunghezza dispari: pop in testa
            let res: Nodo<T> = new Nodo(this.#head.value);

            if(this.#head.next){
                this.#head.next.prec = undefined;
                this.#head = this.#head.next;
            }
            else {
                this.#head = undefined;
            }

            return res;
        }
    }

    as_array(): T[] {
        let res: T[] = [];
        if(!this.#head){
            return res;            
        }

        let curr: Nodo<T> = this.#head;
        while(curr.next !== undefined){
            res.push(curr.value);
            curr = curr.next;
        }
        // altrimenti l'ultimo nodo non sarebbe inserito.
        res.push(curr.value);

        return res;
    }
}

let list = new DrunkenList();

list.push(3);
list.push(4);
console.log(list.as_array());

console.log(list.pop(), list.length, list.as_array());
