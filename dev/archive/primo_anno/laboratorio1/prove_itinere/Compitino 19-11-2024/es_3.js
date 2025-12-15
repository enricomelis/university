function dosetop(A){
    let intersezione = {};

    let keys = [];
    for(let key in A[0]){
        keys.push(key);
    }
    console.log(keys);

    let inserire = false;
    for(let insieme of A){
        console.log(insieme);
        for(let key of keys){
            if(insieme[key] === 1){
                inserire = true
            }
            else {
                inserire = false
            }
        }
    }


    return intersezione;
}


var A=[
    {a:1, b:1, c:1},
    {a:1, c:1, d:1},
    {a:1, c:1, e:1}
]

console.log(dosetop(A))