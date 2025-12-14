f = (n) => {
    let segreto = 0;
    if(n == segreto) return 0;
    else {
        return (n < segreto) ? -1 : 1;
    }
}

function gtn(f, [a, b]){
    let mid, n;
    let t = 0;
    while (a < b){
        if(a === b-1){
            if(f(a) === 0) return [a, t];
            if(f(b) === 0) return [b, t];
        }
        t++;
        mid = Math.floor((a+b)/2)
        current = f(mid);

        if(current === 0){
            n = mid;
            return [n, t];
        }
        else {
            if(current === -1) a = mid;
            else b = mid;
        }
        
    }

}

// console.log(f(20));
[numero, tentativi] = gtn(f, [0, 20]);
console.log("Il numero ", numero, " è stato trovato in ", tentativi, " tentativi.");