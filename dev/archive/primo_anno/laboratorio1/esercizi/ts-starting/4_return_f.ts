let func = (x: number): number => {
    return 2*x;
}

let a: number = func(2);

let ret = (x: number, fn: Function): Function => {
    return fn;
}

let j: Function = ret(a, func)
console.log(j(3));