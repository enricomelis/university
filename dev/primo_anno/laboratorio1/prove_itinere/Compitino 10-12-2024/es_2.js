function kabovep(k, p, ...numeri){
    let res = [];

    if(numeri.length === 0) return []
    else{
        for(let i = 0; i<numeri.length; i++){
            if(res.length <= k && numeri[i] > p){
                console.log(numeri[i], p, res)
                res.push(numeri[i])
            }
        }
    }

    return res;
}


