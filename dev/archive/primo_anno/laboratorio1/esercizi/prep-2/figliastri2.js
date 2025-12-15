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

function sortSib(T){
    if(!T) return;

    let nodo = {val: T.val, sx: {}, dx: {}};
    
    // ricorsivamente, creo i sotto alberi
    let figlioSx = sortSib(T.sx);
    let figlioDx = sortSib(T.dx);
    let valSx, valDx;   

    // se il nodo è una foglia, è un sotto albero ordinato
    if(!figlioSx && !figlioDx) return T;

    valSx = (!figlioSx) ? -Infinity : figlioSx.val;
    valDx = (!figlioDx) ? -Infinity : figlioDx.val;

    // assegno i sotto alberi ordinati al nuovo albero
    if(valSx <= valDx){
        nodo.sx = figlioSx;
        nodo.dx = figlioDx;
    } else {
        nodo.sx = figlioDx;
        nodo.dx = figlioSx;
    }

    return nodo;
}

console.log(sortSib(tree));