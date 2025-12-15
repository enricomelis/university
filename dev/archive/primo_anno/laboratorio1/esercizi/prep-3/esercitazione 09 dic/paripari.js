function paripari(A){
    let res = [];

    for(let i = 0; i<A.length; i = i+2)
        if(A[i]%2 === 0)
            res.push(A[i]);

    return res;
}