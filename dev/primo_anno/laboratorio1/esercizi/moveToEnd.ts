class MoveToEndC <T> {
    #a: T[];
    #f: (a: T, b: T) => boolean;

    constructor(arr: T[], func: (a: T, b: T) => boolean){
        this.#a = arr;
        this.#f = func;
    }

    get a(){ return this.#a; }
    get f(){ return this.#f; }

    move(k: T): number {
        for(let i = 0; i < this.#a.length; i++) {
            if( this.#f(this.#a[i], k) ) {
                const element = this.#a[i];
                this.#a.splice(i, 1);  
                this.#a.push(element); 
                return i;
            }
        }
        return -1;
    }
}