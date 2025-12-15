albero = {
    val: 0,
    sx: {
        val: 1,
        sx: {
            val: 3,
        },
        dx: {
            val: 4,
        }
    },
    dx: {
        val: 2,
        sx: {
            val: 5,
        },
        dx: {
            val: 6,
        }
    }
}

function visitaSimmetrica(T){
    if(!T) return null;
    visitaSimmetrica(T.sx);
    console.log(T.val);
    visitaSimmetrica(T.dx);
}

visitaAnticipata = (T) =>{
    if(!T) return null;
    console.log(T.val);
    visitaAnticipata(T.sx);
    visitaAnticipata(T.dx);
}
visitaPosticipata = (T) =>{
    if(!T) return null;
    visitaPosticipata(T.sx);
    visitaPosticipata(T.dx);
    console.log(T.val);
}

// visitaSimmetrica(albero);
visitaPosticipata(albero);