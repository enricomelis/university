function replace_filter_f(f, g){
    function res(A){
        let B = [];
        let C = [];
        for(let i = 0; i<A.length; i++){
            B[i] = (f(A[i]));
        }
        for(let j = 0; j<B.length; j++){
            if(!g(B[j]))
                C.push(B[j]);
        }
        return C;
    }

    return res;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const succ = (x) => {
    return x+1;
} 

const pari = (x) => {
    return (x % 2 == 0) ? true : false;
}


console.log(replace_filter_f(succ, pari)(arr));