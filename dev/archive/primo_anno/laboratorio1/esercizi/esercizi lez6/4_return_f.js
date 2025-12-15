let func = (x) => {
    return 2*x;
}

a = func(2);

let ret = (x) => {
    console.log(x);
    return func;
}

ret(a);
console.log(ret);