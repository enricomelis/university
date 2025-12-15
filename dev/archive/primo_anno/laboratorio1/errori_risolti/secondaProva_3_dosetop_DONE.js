function dosetop(A){
    let keySet = {};
    let res = {};

    for(let set of A){
        let keys = Object.keys(set);
        for(let key of keys){
            keySet[key] = 1;
            res[key] = 1;
        }
    }

    
    for(let key in keySet){
        for(let set of A){
            if(set[key] !== 1){
                delete res[key];
            }
        }
    }    

    return res;
}

var A=[
    {1:1, 3:1, 5:1, 7:1, 9:1},
    {1:1, 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1},
    {a:1, 3:1, 5:1, 9:1}
]

console.log(
    dosetop(A)
);
