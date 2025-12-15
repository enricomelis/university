function rank(A, k){
    if(!A.includes(k)) return undefined;

    let frequencyMap = {}
    
    for(let el of A){
        if(!frequencyMap[el])
            frequencyMap[el] = 1;
        else frequencyMap[el] = frequencyMap[el] + 1;
    }
    
    let freq = frequencyMap[k];
    let rk = 1;
    for(let key in frequencyMap){
        if( frequencyMap[key] > freq )
            rk++;
    }

    return rk;
}