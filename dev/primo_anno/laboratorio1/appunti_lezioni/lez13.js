// rappresentiamo insiemi matematici con gli oggetti

// set = {1: "uva", 2: "mele"}
// così fa cagare perché possiamo aggiungere duplicati senza problemi
// per evitare duplicati dobbiamo controllare che non sia già presente,
//     scorrendo tutto l'oggetto in tempo O(n)

// modo efficiente, che sfrutta JS
set = {"uva": 1, "mele": 3, "banana": 1}
// facendo così JS ci da errore nel caso aggiungessimo una chiave già inserita
// il valore è inutile finché rimaniamo negli insiemi, nei multinsimi ha senso per le quantità

function creaSet(){
    return {};
}

function inserisciElemento(set, element){
    set[element] = 0;
    // il set[element] forza nel JS l'elaborazione del parametro formale, 
    //     facendo in modo che la chiave diventi effettivamente la stringa che vogliamo

    // facendo set.element si creerebbe una chiave "element" che noi non vogliamo

    // return; NON NECESSARIO perché gli oggetti sono passati per riferimento
}

function rimuoviElemento(set, element){
    delete set[element];
}

function appartenenzaSet(set, el){
    return el in set;
}

function unioneSet(A, B){
    let C = {};
    for (let key in A){
        // C[key] = A[key];
        inserisciElemento(C, key);
    }
    for (let key in B){
        inserisciElemento(C, key);
    }
    return C;
}

X = {"pere": 0, "mele": 0, "arance": 0};
Y = {"pere": 0, "ribes": 0, "banane": 0};

intersezioneSet = (A, B) => {
    let C = {};
    for(let key in A){
        if(key in B)
            inserisciElemento(C, key);
    }
    return C;
}

differenzaSet = (A, B) => {
    let C = {};
    for(let key in A){
        if(!(key in B)){
            inserisciElemento(C, key);
        }
    }
    return C;
}

// poi ci sono altre funzioni che non ho voglia di scrivere
//     ma sicuramente sono sul JDoodle della Lez13



// assegnamento destrutturante
//     ci piace soltanto quando ben utilizzato
//     utile con le funzioni

t = [0, 4];

[a, b] = t;

console.log(a, ",", b); // output: 0 , 4

// esempio di utilità

function esempio(tupla){
    for (let i in tupla){
        tupla[i] = tupla[i] + 1;
    }
    return tupla;
}

[x, y, z] = esempio([1, 2, 3]);
console.log(x, y, z); // output: 2 3 4


// LISTS, STACK, QUEUE
// gli array si possono usare per rappresentare struttura dati ricorsive comuni
// le seguenti sono le funzioni principali

list = [1, 2, 3, 4, 5];
list.pop()        // restituisce l'elemento in coda rimuovendolo
list.push(6)      // aggiunge 6 alla coda della lista
list.shift()      // restituisce l'elemento in testa rimuovendolo
list.unshift(0)   // aggiunge un elemento in testa, restituisce la nuova lunghezza


// Stack: LIFO, si usa push e pop
// Queue: FIFO, si usa push e shift

// OPERATORE SPREAD
// [testa, ...resto] = [1, 2, 3, 4, 5]
// testa -> 1
// resto -> [2, 3, 4, 5]

let [testa, ...resto] = [1, 2, 3, 4]; // senza il "let" JS da errore