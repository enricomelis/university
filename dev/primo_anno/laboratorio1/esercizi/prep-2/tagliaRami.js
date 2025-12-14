// Sia T un albero k-ario come visto a lezione, 
// e v un valore valido per un nodo dell'albero. 
// Si scriva una funzione JavaScript tagliaRami(T,v) 
// che modifichi T tagliando tutti i rami (attenzione: non la radice!) 
// che hanno valore v. L'operazione di taglio di un nodo 
// elimina dall'albero il nodo in questione, 
// e l'eventuale sotto-albero radicato nel nodo.

let albero_k = {
    val: 2, figli: [
        {val: 2, figli: [
            {val: 2}, 
            {val: 3}
        ]}, 
        {val: 1, figli: [
            {val: 1}, 
            {val: 2}, 
            {val: 3}
        ]}, 
        {val: 4}
    ]
};


function tagliaRami(T,v) {
    for (var i=0;i<(T.figli||[]).length;i++)
        if (T.figli[i].val==v)
            T.figli.splice(i--,1);
        else
            tagliaRami(T.figli[i],v);
}

tagliaRami(albero_k, 3);

function leggiAlbero(T){
    if(!T) return;
    console.log(T.val);
    console.log(T.sx, T.dx);
}

leggiAlbero(albero_k);