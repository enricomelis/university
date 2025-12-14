class PilaL extends Array {
    constructor(){
        super()
        this.#massimo = 10;
    }
    #massimo
    shift() {}
    unshift(x){}

    get max() {
        return this.#massimo;
    }

    set max(m){
        this.#massimo = m;
        if(this.length > m){
            this.splice(0, this.length - m);
        }
    }

    push(e){
        this[this.length] = e;
        if(this.length > this.#massimo){
            for(let i = 0; i<this.length; i++){
                this[i] = this[i+1];
            }
            this.length--;
        }
    }

}

let x = new PilaL();
x.max = 3;

x.push(1);
x.push(2);
x.push(3);
x.push(4);

console.log(x);

x.max = 1;
console.log(x);
