function sommak(A, k, d){
    // prima parte: una filter 
    let res = A.filter( (a) =>  k_cfr(a, k) >= d  );
    console.log(res);
    // seconda parte: una reduce
    return res.reduce( (a, b) => a+b, 0 );    
}

const k_cfr = (num, k) => {
    let str_num = String(num);
    if(str_num.length <= k)
        return undefined;

    let i = 0;
    let cfr = 0;
    while(i <= k){
        cfr = num % 10;
        num = Math.floor(num / 10);
        i++;
    }

    return cfr;
}