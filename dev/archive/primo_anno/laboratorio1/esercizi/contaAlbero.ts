interface Nodo {
    sx?: Nodo,
    dx?: Nodo,
    val: number,
    conta: number,
}

function contaAlbero(T: Nodo | undefined): number{
    if(!T) return 0;

    T.conta = contaAlbero(T.dx);

    return contaAlbero(T.sx) + contaAlbero(T.dx) + 1;
}