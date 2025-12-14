// foglio delle presenze firmato.


// il tipo Elem indica tutti gli elementi SCALABILI e COMPARABILI.

function intRatio(A: Elem, B: Elem): number {
    // assumo che A abbia definito un metodo lessThan(X)
    // e che questo metodo ritorni un booleano
    if(A.lessThan(B)){
        // assumo alpha uno scalare intero positivo maggiore di 1.
        let alpha: number = 1;

        // assumo che A abbia un metodo scaleBy(a)
        // e che questo ritorni un Elem.
        while( A.scaleBy(alpha).lessThan(B) && !(A.scaleBy(alpha+1).lessThan(B)) ){
            alpha++;
        }
        // prendo l'alpha precedente all'uscita del ciclo, ovvero quello che ci interessa
        // il massimo che rispetta la condizione
        alpha--;
        return alpha;
    }
    else {
        return 1 / intRatio(B, A);
    }
}