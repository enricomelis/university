// priorità: grande-pari > pari > dispari
pri = (e) => { return (e%2===0 ? 1.5*e : undefined); }

function enqueue(Q, e, pri){
    if(Q.length === 0) 
        Q.push(e);
    else {
        let inserito = false;
        let i = 0;
        while(!inserito){
            curr_pri = pri(Q[i]);
            if(curr_pri > pri(e) || pri(e) == undefined)
                Q.push(e);
            else {
                Q.splice(i, 0, e);
            }
            inserito = true;
        }
    }
    return Q;
}

function dequeue(Q){
    let x = Q[0];
    let new_length = Q.length - 1;
    for (let i = 0; i<Q.length; i++){
        Q[i] = Q[i+1];
    }
    Q.length = new_length;
    return x;
}

coda = [];
enqueue(coda, 3, pri);
enqueue(coda, 5, pri);
enqueue(coda, 6, pri);
enqueue(coda, 8, pri);
enqueue(coda, 9, pri);
enqueue(coda, 10, pri);

console.log(coda);
console.log(dequeue(coda), coda);