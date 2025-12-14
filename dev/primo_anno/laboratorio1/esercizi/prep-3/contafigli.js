function contaFigli(T){
    // casi base
    if(!T.sx && !T.dx) return [0, 0];
    if(!T.sx && T.dx) return [0, 1];
    if(T.sx && !T.dx) return [1, 0];

    // chiamate ricorsive
    let [a, b] = contaFigli(T.sx);
    let [c, d] = contaFigli(T.dx);

    // combinazioni
    return [a+c+1, b+d+1]
}

var T={
    val: 8,
    sx: {
        val: 9, 
        sx: {val: 8}, 
        dx: {val: 1} 
    },
    dx: {
        val: 2, 
        sx: {
            val: 5, 
            dx: {
                val: 3
            }
        }, 
        dx: {
            val: 4, 
            dx: {
                val: 8
            } 
        } 
    }
}

console.log( contaFigli(T) )