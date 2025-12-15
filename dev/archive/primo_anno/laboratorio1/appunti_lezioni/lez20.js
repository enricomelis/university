function contafigli(T) {
    console.log(T);
    if(!T.sx && !T.dx)
        return [0, 0];
    if(!T.sx && T.dx)
        return [0, 1];
    if(!T.dx && T.sx) {
        return [1, 0];
    }
    let [a, b] = contafigli(T.sx);
    let [c, d] = contafigli(T.dx);

    return [a+c+1, b+d+1];
}

esempio = {
    val: 8,
    sx: {
        val: 9,
        sx: {
            val: 8
        },
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

// console.log(contafigli(esempio));




function dosetop(A){
    
    function intersect(X, Y){
        let x = {};
        for(el in X){
            if(el in Y)
                x[el] = 1;
        }
    }

    A.reduce( (el1, el2) => (intersect(el1, el2)) );

}

A = [4, 6, 4, 6];

console.log(
    A.reduce( (a, b) => ((a+b)) ) / A.length
);