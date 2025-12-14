// Scoping delle variabili
// 3: Globale, di Funzione, di Blocco

// il var estende la visibilità del NOME (non il valore) allo scope più grande
function esempio(a, b){
    let c = 3.14 + i;
    for(var i = 0; i<= b; i++){
        console.log(i);
    }
}
// in questa funzione, a e b appartengono allo scope di funzione (i loro nomi e valori non sono accessibili globalmente)
// c è definito a partire da 3.14 e da i, l'interprete non da nessun errore, nonostante il valore sia undefined (viene inizializzato nel for)
// se i fosse stato dichiarato con let, sarebbe stato restituito un errore, perché sarebbe appartenuto allo scope del blocco


// lo scope di funzione, per in JS è visibile a tutto il blocco nel quale è dichiarata
function f(a, b) {
    let x = a;
    x = x*x;
    g(x, a);

    function g(b, c){
        return b*c;
    }
}
// in questo caso, g(x, a) fa riferimento alla funzione dichiarata successivamente, sempre appartenente allo scope della funzione f.