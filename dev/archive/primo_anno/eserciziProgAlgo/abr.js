// un po' di playground javascript per implementazione di alberi binari di ricerca

// le funzioni seguenti sono per alberi binari generici
// e servono a verificare che un certo albero binario t sia di ricerca

let visitaSimmetrica = (t) => {
    if(t){
        visitaSimmetrica(t.sx);
        console.log(t.val);
        visitaSimmetrica(t.dx);
    } 
}

function max(t){
    if(!t.sx && !t.dx) return t.val;
    if(!t.sx && t.dx) return t.dx.val;
    if(!t.dx && t.sx) return t.sx.val;

    let res = t.val;
    let sx = max(t.sx);
    let dx = max(t.dx);

    if(res <= dx)
        res = dx;
    if(res <= sx)
        res = dx;

    return res;
}

function min(t){
    if(!t.sx && !t.dx) return t.val;
    if(!t.sx && t.dx) return t.dx.val;
    if(!t.dx && t.sx) return t.sx.val;

    let res = t.val;
    let sx = min(t.sx);
    let dx = min(t.dx);

    if(res >= dx)
        res = dx;
    if(res >= sx)
        res = sx;

    return res;
}

function is_abr(t){
    if(!t.sx && !t.dx) return true;
    if(!t.sx && t.dx) return is_abr(t.dx);
    if(!t.dx && t.sx) return is_abr(t.sx);
    if(!t) return true;

    if(is_abr(t.sx) && is_abr(t.dx)){
        if(max(t.sx) <= t.val && min(t.dx) >= t.val)
            return true;
        else return false;
    }
}

// ---- fine delle funzioni su alberi generici ----

let min_abr = (t) => {
    if(!t.sx)
        return t.val;
    else 
        return min_abr(t.sx);
}


let max_abr = (t) => {
    if(!t.dx)
        return t.val;
    else 
        return max_abr(t.dx);
}

let search_abr = (t, x) => {
    if(!t || t.val === x) return t;
    if(x >= t.val)
        return search_abr(t.dx, x);
    else return search_abr(t.sx, x);
}

let succ_abr = (t, x) => {
    let current;
    while(t.dx !== undefined && current.val !== x)
        current = t.dx;
    if(current.dx) return 
    // non so come implementare il successore
    // senza avere un riferimento dinamico al genitore 
    // del nodo che sto guardando.
}

let insert_abr = (t, nodo) => {
    let y = null;
    let x = t;
    while(x){
        y = x;
        if(nodo.val >= x.val)
            x = x.dx;
        else x = x.sx;
    }
    if(!y)
        t = nodo;
    else {
        if(nodo.val >= y.val)
            y.dx = nodo;
        else y.sx = nodo;
    }
}

let delete_abr = (t, x) => {}

let esempio = {
    val: 6,
    sx: {
        val: 5,
        sx: {
            val: 2,
        },
        dx: {
            val: 5,
        }
    },
    dx: {
        val: 7,
        dx: {
            val: 8,
        },
    }
}

insert_abr(esempio, {val: 1});
visitaSimmetrica(esempio);
console.log(esempio);
