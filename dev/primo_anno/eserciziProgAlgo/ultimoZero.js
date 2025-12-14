function ultimoZero(A, s, f){
    if( s === f ){
        if( A[s] === 0 )
            return s;
        else return -1;
    }
    let m = Math.floor((s + f) / 2);
    let idx = Math.max( ultimoZero(A, s, m), ultimoZero(A, m+1, f) );

    return idx;
}

let arr_1 = [1, 1, 1, 1, 1, 1, 1, 1, 1];    // output: -1
let arr_2 = [1, 1, 0, 1, 1, 1, 1, 1, 1];    // output: 2
let arr_3 = [1, 1, 0, 1, 1, 0, 1, 1, 0];    // output: 8

let arr = arr_1;                            // anche se passato per riferimento non ci interessa
console.log(ultimoZero(arr, 0, arr.length-1));