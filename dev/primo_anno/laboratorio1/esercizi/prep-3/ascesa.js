let vicinato = (nodo, archi) => { return archi.filter( (arco)=>(arco.da === nodo) ).map( (arco)=>(arco.a) ) }

let maxNode = (a, b) => {
    return ( a.val > b.val ) ? a : b;
}

function sali(G, nodo){
    let res = {};

    function dfs(nodo, visitati){
        visitati.push(nodo);

        let max = nodo;

        let vicini = vicinato(nodo, G.archi);

        for(let vicino in vicini){
            if(!visitati.includes(vicino))
                max = maxNode(max, dfs(vicino, visitati))

        }
        return max
    }

    let visitati = [];
    return dfs(nodo, visitati);
}

let n0 = {val: 4};
let n1 = {val: 3};
let n2 = {val: 5};

let a = {da: n0, a: n1};
let b = {da: n1, a: n2};

let V = [n0, n1, n2];
let E = [a, b]

let G = {nodi: V, archi: E};

console.log(sali(G, n0))