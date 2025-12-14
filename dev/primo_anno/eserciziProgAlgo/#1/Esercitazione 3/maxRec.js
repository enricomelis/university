function MaxRicorsivo(A, sx, dx){
    if(sx == dx) {
        return A[sx];
    }
    let cx = Math.floor((sx + dx) / 2);
    let max_sx = MaxRicorsivo(A, sx, cx);
    let max_dx = MaxRicorsivo(A, cx + 1, dx);
    return Math.max(max_sx, max_dx);
}

let arr = [4, 3, 2, 7, 8, 3, 1, 0];

console.log(MaxRicorsivo(arr, 0, arr.length - 1)); 
