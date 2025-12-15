function prodotto(A, B){
    let res = {};

    for(let a in A){
        for(let b in B){
            res[String(a) + String(b)] = 1;
        }
    }

    return res;
}