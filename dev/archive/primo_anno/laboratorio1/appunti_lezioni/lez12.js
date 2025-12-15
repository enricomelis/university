tree = {
    val: "**",
    sx: {
        val: "*",
        sx: {val: "4"},
        dx: {val: "3"}
    },
    dx: {val: "3"}
}

function leggi(T, str){
    if(T == undefined) return "";
    return (str + leggi(T.sx, str) + T.val +  leggi(T.dx, str));
}
// console.log(leggi(tree, ""));


albero_ternario = {
    val: "E",
    sx: {
        val: "E",
        sx: {val: "("},
        cx: {
            val: "E",
            sx: {
                val: "E",
                cx: {val: 4}
            },
            cx: {val: "*"},
            dx: {val: 3}
        },
        dx: {val: ")"}
    },
    cx: {val: "**"},
    dx: {val: 2}
}


function leggi_ternario(T){
    if(T == undefined) return "";
    if(T.val != "E") return T.val;
    return leggi_ternario(T.sx) + leggi_ternario(T.cx) + leggi_ternario(T.dx);
}

// console.log(leggi_ternario(albero_ternario));


k_ario = {
    val: "E",
    figli: [ 
        {
            val: "E",
            figli: [ 
                {val: "("},
                {val: "E", figli: [
                        {val: "E", figli: [{val: 4}]},
                        {val: "+"},
                        {val: "E",figli: [{val: 3}]}
                    ]},
                {val: ")"}
            ]
        },
        {val: "**"},
        {
            val: "E",
            figli: [{val: 2}]
        }
    ]
}

function leggi_k_ario(T, str = ""){
    if(!T) return "";
    if(T.val != "E") return T.val;
    for(i in T.figli) {
        str += leggi_k_ario(T.figli[i]);
    }
    return str;
}

console.log(leggi_k_ario(k_ario));