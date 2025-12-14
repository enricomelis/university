interface Nodo<T> {
    val: T,
    figli?: Nodo<T>[]
}

type Pred<T> = (x: T) => boolean;

function sbarba<T>(root: Nodo<T>, s: Pred<T>): void {
    let i: number = 0;
    while (root.figli && i < root.figli.length) {
        if (s(root.figli[i].val)) {
            root.figli.splice(i,1)
        }
        else {
            sbarba(root.figli[i],s) 
            i++
        }
    }
}