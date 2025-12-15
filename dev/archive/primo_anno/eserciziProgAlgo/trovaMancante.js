// versione lineare.


let trovaLineare = (A) => {
    let trovato = false;
    let i = 1;
    while(!trovato){
        if(A[i-1] !== i){
            return i;
        }
        i++;
    }
}

let trovaLogaritmica = (A, fst, lst) => {
    if(fst === lst-1){
        if(A[fst] !== fst+1) return fst+1;
        else return lst+1;
    }
    let mdx = Math.floor((fst + lst) / 2);
    if(A[mdx] > mdx+1){
        return trovaLogaritmica(A, fst, mdx);
    }
    else {
        return trovaLogaritmica(A, mdx+1, lst);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 8, 9, 10];
console.log(trovaLineare(arr));
console.log(trovaLogaritmica(arr, 0, arr.length-1));