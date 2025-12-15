let f = (x) => x**2;
let g = (x) => Math.pow(3, x);

let composizione = (func_1, func_2, x) => {
    return func_2(func_1(x));
}

console.log(composizione(f, g, 2));
console.log(composizione(g, f, 2.5));