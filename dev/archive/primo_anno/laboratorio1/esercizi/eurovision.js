class NonCantaError extends Error {}

class Eurovision {
    constructor(){
        this.cantanti = [];
    }

    iscrivi(c){
        if(typeof c.canta !== "function") 
            throw new NonCantaError();
        else this.cantanti.push(c);
    }

    shuffle(arr){
        for(let i = arr.length-1; i > 0; i--){
            const j = Math.floor( Math.random() * (i+1) );
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    semifinale(n){
        if(n !== 1 && n !== 2)
            throw new Error("Input deve essere 1 o 2.");

        if(n === 1) this.shuffle(this.cantanti);
        const num = this.cantanti.length;
        let numSemifinale1 = Math.ceil(num / 2);

        if(n === 1) return this.cantanti.slice(0, numSemifinale1);
        else return this.cantanti.slice(numSemifinale1);
    }
}