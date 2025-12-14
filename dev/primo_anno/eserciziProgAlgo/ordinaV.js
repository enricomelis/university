function ordinaV(arr){
    sx = 0;
    dx = arr.length - 1;
    while(sx < dx){
        if(arr[sx] == 1 && arr[dx] == 0){
            tempo = arr[sx];
            arr[sx] = arr[dx];
            arr[dx] = tempo;
        } 
        if(arr[sx] != 1) {sx++;}
        if(arr[dx] != 0) {dx--;}
    }
    return A;
}

console.log(ordinaV(A = [0, 1, 0, 1, 0, 1, 0]));