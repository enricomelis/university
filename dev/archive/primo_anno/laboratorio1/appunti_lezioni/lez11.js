tree = {
    val: 0,
    sx: {
        val: 1,
        sx: {
            val: 3,
            sx: {
                val: 7,
                // sx: {},
                dx: {
                    val: 11
                }
            },
            dx: {
                val: 8
            }
        },
        dx: {
            val: 4,
            sx: {
                val: 9
            }
        }
    },
    dx: {
        val: 2,
        sx: {
            val: 5,
            dx: {
                val: 10
            }
        },
        dx: {
            val: 6,
        }
    }
}

function altezza(T){
    if(T == undefined) return -1;
    let h_sx = altezza(T.sx);
    let h_dx = altezza(T.dx);
    return 1 + Math.max(h_sx, h_dx);
}

// console.log(altezza(tree));

let maxL = -Infinity;
function leftView(T, lvl){
    if(lvl > maxL)
        console.log(T.val);
        maxL = lvl;
    leftView(T.sx, lvl+1);
    leftView(T.dx, lvl+1);
}

leftView(tree, maxL);

// un albero k-ario è di questo tipo
// dove il vettore ha lunghezza k
// invece di avere 2 chiamate ricorsive, ne ho k (con un for)

let k_tree = {
    val: 3,
    figli: [{
        val: 4,
        figli: []
    }]
}
