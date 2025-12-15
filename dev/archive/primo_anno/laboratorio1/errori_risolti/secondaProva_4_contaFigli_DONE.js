function contaFigli(BT){
    if(!BT) return [0, 0];
    if(BT.sx == null && BT.dx != null) return [0, 1];
    if(BT.sx != null && BT.dx == null) return [1, 0];

    let [a, b] = contaFigli(BT.sx);
    let [c, d] = contaFigli(BT.dx);

    if(!BT.sx)
        if(!BT.dx)
            return [a+c, b+d]
        else return [a+c, b+d+1]
    if(BT.sx && !BT.dx) return [a+c+1, b+d];
    return [a+c+1, b+d+1];
}