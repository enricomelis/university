function sortSib(T) {
    if (!T) return ;                                        // caso base: il nodo non esiste

    let nuovoNodo = { val: T.val, sx: null, dx: null };     // creazione del nuovo albero

    let figlioSinistra = sortSib(T.sx);                     // creazione dei figli ordinati
    let figlioDestra = sortSib(T.dx);

    let valSinistra, valDestra;                             // creazione dei valori dei nodi da confrontare
    if(figlioSinistra != undefined)                         // caso base: il figlio sx può non esistere
        valSinistra = figlioSinistra.val;
    else 
    valSinistra = -Infinity;

    if(figlioDestra != undefined)                           // caso base: il figlio dx può non esistere
        valDestra = figlioDestra.val;
    else
        valDestra = -Infinity;

    if (valSinistra <= valDestra) {                         // confronto: quale figlio ha valore minore
        nuovoNodo.sx = figlioSinistra;
        nuovoNodo.dx = figlioDestra;
    } else {
        nuovoNodo.sx = figlioDestra;
        nuovoNodo.dx = figlioSinistra;
    }

    return nuovoNodo;                                       // ritorno del nuovo nodo, con figli ordinati
}


tree = {
    val: 8,
    sx: {
        val: 9,
        sx: {val: 8}
    },
    dx: {
        val: 2,
        sx: {
            val: 5
        },
        dx: {
            val: 4,
            sx: {val: 8}
        }
    }
}

console.log(sortSib(tree));