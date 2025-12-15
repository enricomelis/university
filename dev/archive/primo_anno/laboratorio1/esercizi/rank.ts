function rank<T>(A: T[], k: T): number | undefined | Map<T, number> {
    if(!A.includes(k)) return undefined;

    let freqMap = new Map<T, number>();

    for(let el of A){
        if(!freqMap.has(el)){
            freqMap.set(el, 1)
        }
        else {
            freqMap.set(el, freqMap.get(el)! + 1);
        }
    }

    let res: number = 1;
    let freqSet = new Set<number | undefined>();
    for(let key of freqMap.keys()){
        if(!freqSet.has(freqMap.get(key)) && freqMap.get(key)! > freqMap.get(k)!){
            res++;
        }
        freqSet.add(freqMap.get(key));
    }

    return res;
}