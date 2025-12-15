contaFogliePari = (T, ctr = 0) => {
    if(!T) return 0;
    if(T.sx == undefined && T.dx == undefined)
        if(T.val%2 == 0){
            return 1
        }
    return contaFogliePari(T.sx) + contaFogliePari(T.dx);
}

esempio = {
    val: 5,
    sx: {
        val: 2,
        sx: {
            val: 1,
            sx: {val: 4},
            dx: {val: 2}
        },
    },
    dx: {val: 7}
}

console.log(contaFogliePari(esempio));