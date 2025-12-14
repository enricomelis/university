class EmptyArgsError extends Error {}
class BadArgError extends Error {
    #index;
    #value;
    constructor(message, index, value){
        super(message)
        this.message = message;
        this.#index = index;
        this.#value = value;
    }

    get index(){ return this.#index; }
    get value(){ return this.#value; }
}

class OutOfRangeError extends BadArgError {}
class NotIntegerError extends BadArgError {}
class NotPrimeError extends BadArgError {}

function isPrime(x){
    let res = true;
    let i = 2;
    while(i < x){
        if(x % i === 0){
            res = false;
            i = x+1;
        }
        i++;
    }
    return res;
}

function schizzinosa(...numbers){
    let res = 0;

    if(numbers.length === 0)
        throw new EmptyArgsError("Sequenza deve avere almeno un numero.");
    
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] <= 0 || numbers[i] >= 1000)
            throw new OutOfRangeError("Numero deve essere compreso fra 0 e 1000 esclusi", i+1, numbers[i]);
        else if (!Number.isInteger(numbers[i]))
            throw new NotIntegerError("Numero deve essere intero", i+1, numbers[i]);
        else if(!isPrime(numbers[i]))
            throw new NotPrimeError("Numero deve essere primo.", i+1, numbers[i]);
        else 
            res += numbers[i]
    }

    return res;
}