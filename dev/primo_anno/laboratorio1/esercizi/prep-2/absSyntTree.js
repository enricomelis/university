// tree rappresenta la stringa a*b+c.
// la struttura della grammatica ci permette
//     di dare priorità alla moltiplicazione

// ---- albero tramite array ----

tree_array = 

[["E", [["E", ["a"]], ["*"], ["E", ["b"]]]], ["+"], ["E", ["c"]]];

// questa qui sotto non funziona
let valutaStringaArray = (T, str = "") => {
    if(!T) return "";
    if(T[0] != "E") return T[0];
    for (let i = 0; i<T.length; i++){
        str += valutaStringaArray(T[i]);
    }
}

console.log(valutaStringaArray(tree_array));

// ---- albero tramite oggetti ----

tree_albero = {
    val: "E",
    figli: [
        {
            val: "E",
            figli: [
                {val: "E", figli: [{val: "a"}]}, 
                {val: "*"}, 
                {val: "E", figli: [{val: "b"}]}
            ]
        }, 
        {
            val: "+"
        }, 
        {
            val: "E",
            figli: [{val: "c"}]
        }
    ]
};

let valutaStringaAlbero = (T, str = "") => {
    if(!T) return "";
    if(T.val != "E") return T.val;
    for (i in T.figli){
        str += valutaStringaAlbero(T.figli[i]);
    }
    return str; 
}

// console.log(valutaStringaAlbero(tree_albero));