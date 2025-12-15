let albero_1 = {
    val: 2,
    sx: {
        val: 1,
        sx: {val: 2},
        dx: {val: 3}
    },
    dx: {
        val: 4,
        sx: {val: 3},
        dx: {val: 3}
    }
};


function pota(t, k) {
    if (!t) return ;
    if (t.val > k) return t = null;
    
    t.sx = pota(t.sx, k);
    t.dx = pota(t.dx, k);

    return t;
}

console.log(pota(albero_1, 2))
