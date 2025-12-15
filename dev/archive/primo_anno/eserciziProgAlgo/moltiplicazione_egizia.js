function MoltiplicazioneEgizia (a, b) {
    let ris = 0;
    while(a > 0){
        if(a%2 != 0){
            ris = ris + b;
        }
        a = (a - (a%2))/2;
        b = b*2;
    }
    return ris;
} 

let x = 21;
let y = 32;
console.log("La somma di due numeri ", x, " e ", y, ": ", MoltiplicazioneEgizia(x, y));