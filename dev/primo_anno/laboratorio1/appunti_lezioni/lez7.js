// gli oggetti sono insiemi di coppie chiave-valore
// c'è una somiglianza con ambiente e memoria in ProgAlgo

// le chiavi non si possono cambiare, i valori associati sì
// si possono aggiungere delle coppie

let x = 6;

let ogg = {
    chiave_1: 3,
    "pippo": true,
    x,      //espansione di variabile, alla chiave x assegna il valore 6
    6: 6,
    [5+5]: 10
}
console.log(ogg);


for (k in ogg){
    console.log(k);     // k assume il valore delle chiavi
    delete ogg[k];      // elimina il valore all'interno della chiave k
}


// gli array sono degli oggetti con delle chiavi ordinate e naturali
// gli array possono avere degli elementi vuoti
// ri-assegnando la lunghezza di un array, si eliminano tutti gli elementi con indice 
//     maggiore della nuova lunghezza
// il delete semplicemente rende l'elemento vuoto, lunghezza e indici non cambiano
//     per cambiare anche la lunghezza si deve usare la funzione di libreria splice()


arr = [1, 3, 5, 2, 4, 6, 3, 5, 8, 6]

arr.pop()       // rimuove l'ultimo elemento e lo restituisce
arr.shift()     // rimuove il primo elemento e shifta tutti gli altri di uno a sx