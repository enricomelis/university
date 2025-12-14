f_lista = (n, ris=[n]) => {
    if(n===1) return 1;
    next = (n%2===0) ? n/2 : 3*n+1;

    ris.unshift(next);
    f_lista(next, ris);
    return ris;
}
// console.log(f_lista(24));

f_succ = (n) => {
    return (n%2===0) ? n/2 : 3*n +1;
}
// console.log(f_succ(4));

inserisci = (n, T) => {
    if(!T) return;
    if(T.val === f_succ(n)){
        if(T.sx == undefined)
            if(n === 2 * T.val) {
                T.sx = {val: n};
            } 
        if(T.dx == undefined)
            if(n === (T.val-1)/3 && n!=1) {
                T.dx = {val: n};
            }
    }
    else {
        inserisci(n, T.sx);
        inserisci(n, T.dx);
    }
    
    
}

function collatz(A) {
    let tree = {val: 1};

    let nums = [];
    for(let i = 0; i<A.length; i++)
        nums[i] = f_lista(A[i]);
    console.log(nums);
    
    for(let i = 0; i<nums.length; i++){
        for(let j = 0; j<nums[i].length; j++){
            // console.log(nums[i][j]);
            inserisci(nums[i][j], tree);
        }
    }

    return tree;
}

arr = [24, 106, 7, 21];
// console.log(collatz(arr));

stampa_albero = (T) => {
    if(!T) return;
    if(T) console.log("Nodo corrente: ", T.val);
    if(T.sx) console.log("Figlio Sinistro di ", T.val, ": ", T.sx.val);
    if(T.dx) console.log("Figlio Destro di ", T.val, ": ", T.dx.val);
    console.log("----------------------------");
    stampa_albero(T.sx);
    stampa_albero(T.dx);
}

console.log();
stampa_albero(collatz(arr));

