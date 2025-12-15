function rank(A, k) {
    if(!A.includes(k)) return undefined;

    let freqMap = new Map();

    for(let el of A){
        if(!freqMap.has(el)){
            freqMap.set(el, 1)
        }
        else {
            freqMap.set(el, freqMap.get(el) + 1);
        }
    }

    let res = 1;
    let freqSet = new Set();
    for(let key of freqMap.keys()){
        if(!freqSet.has(freqMap.get(key)) && freqMap.get(key) > freqMap.get(k)){
            res++;
        }
        freqSet.add(freqMap.get(key));
    }

    return res;
}