function trovaGenitoreNodo(T, v, p = null) {
    if (T.val === v) {
        return { genitore: p, nodo: T };
    }
    for (let child of T.figli) {
        let result = trovaGenitoreNodo(child, v, T);
        if (result) {
            return result;
        }
    }
    return null;
}

function innesta(T1, v1, T2, v2) {
    const { genitore: genitore1, nodo: nodo1 } = trovaGenitoreNodo(T1, v1);
    const { genitore: genitore2, nodo: nodo2 } = trovaGenitoreNodo(T2, v2);

    // if (!genitore1 || !nodo1 || !genitore2 || !nodo2) {
    //     throw new Error("Uno dei nodi non è stato trovato, o è radice.");
    // }

    let i = 0;
    let innestato = false;
    while(i < genitore1.figli.length && !innestato){
        if (genitore1.figli[i] === nodo1) {
            genitore1.figli[i] = nodo2;
            innestato = true;
        }
        i++;
    }

    i = 0;
    innestato = false;
    while(i < genitore1.figli.length && !innestato){
        if (genitore2.figli[i] === nodo2) {
            genitore2.figli[i] = nodo1;
            innestato = true;
        }
        i++;
    }
}