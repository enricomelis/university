function cleanSet(S, p){
    for(let str in S)
        if(p(str))
            delete S[str];
    let ctr = 0;
    for(let str in S)
        ctr += S[str];
    return ctr;
}