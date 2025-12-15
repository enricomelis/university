// valori e riferimento in javascript
//     tipi di base: per valore
//     tipi complessi: per riferimento

function esempio(A){
    A.pop();
}

function esempio_valore(x){
    x++;

    return x;
}

arr = [1, 2, 3];

esempio(arr);                           // arr viene passato per riferimento, quindi esempio() agisce direttamente su di lui
console.log(arr);                       // output: [1, 2]

let numero = 3;

esempio_valore(numero);                 // numero non viene modificato, viene creata una copia su cui viene eseguita la funzione
console.log(numero);                    // output: 4 
console.log(esempio_valore(numero));    // output: 3


console.log("---- separatore ----");
// self-testing: implementazione di un grafo e lettura dei nodi
//     con liste di adiacenza, G = 
//     0 -> 1
//     1 -> 3
//     2 -> 0, 4
//     3 -> 2
//     4 -> 3

let n0 = {val: 0};
let n1 = {val: 1};
let n2 = {val: 2};
let n3 = {val: 3};
let n4 = {val: 4};
let N = [n0, n1, n2, n3, n4]


let a = {da: n0, a: n1}
let b = {da: n1, a: n3};
let c = {da: n2, a: n0};
let d = {da: n2, a: n4};
let e = {da: n3, a: n2};
let f = {da: n4, a: n3};

let E = [a, b, c, d, e, f];

const G = {nodi: N, archi: E};

function stampaNodi(grafo){
    for(let i = 0; i < grafo.nodi.length; i++){
        console.log(grafo.nodi[i]);
    }
}

function visitaNodi(grafo, nodo){
    if(grafo.archi[0].da == nodo)
        return grafo.archi[0].a;
}

// stampaNodi(G);
console.log(visitaNodi(G, n0));