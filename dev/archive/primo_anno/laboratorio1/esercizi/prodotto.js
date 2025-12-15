function prodotto(A, B) {
    let res = {};

    for(i in A){
        for(j in B){
            res[j+i] = 1;
        }
    }

    return res;
}