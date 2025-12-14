// (Asterischi) Si scriva un programma che dato un intero n stampi n asterischi sulla prima
// linea, n − 2 asterischi sulla seconda linea, n − 4 sulla terza e così via, fino ad arrivare a
// stampare uno o due asterischi sull’ultima linea

let n = 5.32;
n = Math.floor(n);

let asterischi = "";
let i = n;

while(i >= 1){
    asterischi = "";
    for(let j = 1; j <= i; j++){
        asterischi += "*";
    }
    console.log(asterischi)
    i-=2;
}



// Spiegazione
// n è il numero iniziale, che viene reso intero in caso di input float.
// asterischi è ciò che viene stampato, dichiarato e inizializzato come stringa vuota.
// i è il contatore per la stampa di ogni riga.
// j è il contatore per l'incrememeto della stringa.
// ad ogni ciclo del while viene: inizializzata la stringa vuota, creata la stringa per ogni riga, stampata ogni riga e incrementato i.
// ad ogni ciclo for viene costruita la stringa: viene incremenetato di un numero j di asterischi, ad ogni while è n-2.