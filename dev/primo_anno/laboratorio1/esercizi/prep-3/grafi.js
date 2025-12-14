// dato un grafo definito nel seguente modo
//     G = {nodi: V, archi: E}
//     V = [n0, n1, n2, ...]
//         n0 = {val: x}
//     E = [a, b, c, d, e, ...]
//         a = {da: n, a: m}
let n0 = {val: 0};
let n1 = {val: 1};
let n2 = {val: 2};
let n3 = {val: 3};
let n4 = {val: 4};
let n5 = {val: 5};

let a = {da: n0, a: n4};
let b = {da: n1, a: n0};

let V = [n0, n1, n2, n3, n4, n5];
let E = [a, b, ];
let esempio = {nodi: V, archi: E};

console.log( E );