function select(A, K){
    let R = [];

    for(el of K){
        if(typeof el !== "number" || el < 0 || el > A.length)
            throw new RangeError();
    }

    for(let i = 0; i < A.length; i++){
        if(K.includes(i)) R.push( A[i] );
    }

    return R;
}