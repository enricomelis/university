function nuovoTree(tree, sx_fun, dx_fun, quale){
    if(!tree) return null;

    let nuovoVal;
    switch(quale){
        case "dx": 
            nuovoVal = dx_fun ? dx_fun(tree.val) : tree.val;
            break;
        case "sx":
            nuovoVal = sx_fun ? sx_fun(tree.val) : tree.val;
            break;
    }

    return {
        val: nuovoVal, 
        sx: nuovoTree(tree.sx, sx_fun, dx_fun, "sx"),
        dx: nuovoTree(tree.dx, sx_fun, dx_fun, "dx")
    };
}

function map_tree(tree, f_sx, f_dx){
    let res = nuovoTree(tree, f_sx, f_dx, "dx");

    return res;
}