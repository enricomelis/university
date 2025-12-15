function sommaEstremi(A){
    let res = [];
    let x = [];
    for(let el of A)
        x.push(el)
    x = x.sort( (a, b) => a-b );

    console.log(x);

    let i = 0;
    let j = x.length-1;
    while(i <= j){
        res.push( x[i] + x[j] );
        i++;
        j--;
    }

    return res;
}