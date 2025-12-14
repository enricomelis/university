interface Scalabile<T> {
    scaleBy(a: number): T;
}

interface Comparabile<T> {
    lessThan(x: T): boolean;
}

type Elem<T> = Scalabile<T> & Comparabile<T>;

function intRatio<T extends Elem<T>>(A: T, B: T): number {

    if(A.lessThan(B)){
        let alpha: number = 1;
        while(A.scaleBy(alpha+1).lessThan(B)) alpha++;
        return alpha;
    }
    else {
        return 1 / intRatio(B, A);
    }
}

// ! ERRORI:
// totale dimenticanza della interfacce e della loro estensione 
//     per verificare l'esistenza di ciò che ho assunto nel compito.