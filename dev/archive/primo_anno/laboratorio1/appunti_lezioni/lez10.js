

albero_bin = {
    val: 0,
    sx: {
        val: 1,
        sx: {val: 3},
        dx: {val: 4}
    },
    dx: {
        val: 2,
        sx: {val: 5},
        dx: {val: 6}
    }
}

function valutaT(tree){
    console.log(tree.val);
    if(tree.sx != undefined) {
        valutaT(tree.sx);
    }
    if(tree.dx != undefined) {
        valutaT(tree.dx);
    }
}

valutaT(albero_bin);