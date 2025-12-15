function contafigli(T){
    if(T.sx != undefined) return [1, 0];
    if(T.dx != undefined) return [0, 1];

    [s, d] = contafigli(T.sx);
    [a, b] = contafigli(T.dx);


    
    return [s+a, d+b]
}

var T={
    val: 8,
    sx: {
        val: 9,
        sx: {
            val: 8
        }
    },
    dx: {
        val: 2,
        sx: {
            val: 5
        },
        dx: {
            val: 4,
            sx: {
                val: 8
            }
        }
    }
}

console.log(contafigli(T));