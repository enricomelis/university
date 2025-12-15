function f(a, b){
    var res = 0;
    var c = 0;
    var d = 0;
    if(b === 0){
        return a;
    }
    else {
        c = Math.floor(a/b);
        d = a- b*c;
        res = f(b, d);
    }
    return res;
}

console.log(f(21, 14));