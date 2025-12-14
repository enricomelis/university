let y = (x) => 3**x - 2*x -3;

let m;
let calcola_zeri = (f, a, b, p) => {
    while(f(a)*f(b)<0){
        m = (a+b)/2;
        if(f(a)*f(m)<0){
            b = m;
        }
        else {
            a = m;
        }
    }
    return m;
}

console.log(calcola_zeri(y, -20, 0, 0.01));