type cbool = boolean | 0 | 1;

// a: un array di tipo generico
// f: una funzione che prende un elemento di tipo generico e restituisce un cbool
// setaccio: una funzoine che prende "a" e "f" e restituisce un oggetto

interface Result<T> {
    "yes": T[],
    "no": T[],
}

function setaccio<T> (a: T[], f: (x: T) => cbool): Result<T>{
    let res: Result<T> = {
        "yes": [],
        "no": [],
    };

    for(let x of a){
        if(f(x))
            res.yes.push(x);
        else
            res.no.push(x);
    }

    return res;
}