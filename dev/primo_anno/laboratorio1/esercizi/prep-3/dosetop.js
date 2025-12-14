function intersezione(A, B){
    let res = {}
    for(let key in A){
        if(B[key] === 1)
            res[key] = 1;
    }

    return res;
}

function dosetop(A){
    let res = {};
    
    for(let i = 1; i<A.length; i++){
        res = intersezione(A[i-1], A[i]);
    }

    return res;
}

var arr = [
    {1:1, 3:1, 5:1, 7:1, 9:1},
    {1:1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1},
    {a:1, 3:1, 5:1, 9:1}
]

let X = {a:1, b:1, c:1};
let Y = {a:1, c:1, d:1};


// console.log( intersezione( X, Y ) )

console.log( dosetop( arr ) )