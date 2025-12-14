interface Tree<T> {
    val: T;
    sx: Tree<T> | null;
    dx: Tree<T> | null;
}

function nuovoNodo<T>(val: T): Tree<T>{
    return {val: val, sx: null, dx: null};
}

let a = nuovoNodo(8);
let b = nuovoNodo(9);
let c = nuovoNodo(2);
let d = nuovoNodo(8);
let e = nuovoNodo(5);
let f = nuovoNodo(4);
let g = nuovoNodo(8);

f.sx = g;
b.sx = d;
c.dx = f;
c.sx = e;
a.sx = b;
a.dx = c;

console.log(a);

function contaFigli<T>(BT: Tree<T>): [number, number]{
    if(!BT) return [0, 0];
    if(BT.sx == null && BT.dx != null) return [0, 1];
    if(BT.sx != null && BT.dx == null) return [1, 0];

    let [a, b] = contaFigli(BT.sx!);
    let [c, d] = contaFigli(BT.dx!);

    if(!BT.sx)
        if(!BT.dx)
            return [a+c, b+d]
        else return [a+c, b+d+1]
    if(BT.sx && !BT.dx) return [a+c+1, b+d];
    return [a+c+1, b+d+1];
}

console.log(contaFigli(a));
console.log("bp");
