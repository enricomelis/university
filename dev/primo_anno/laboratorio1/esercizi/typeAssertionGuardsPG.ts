// esempi di type assertion e type guards 

// TYPE ASSERTION
let x: unknown = "stringa";
console.log((x as string).length);
// in questo modo diciamo al compilatore che sappiamo x essere una stringa
// quindi non crea problemi quando chiamiami la String.prototype.length
// OUTPUT > 7

let y: unknown = 3;
console.log((y as string).length);
// come possiamo vedere è un controllo solo statico
// OUTPUT > undefined


// TYPE GUARDS
class Uccello {
    vola(){ console.log("sto volando."); }
}

class Pesce {
    nuota(){ console.log("sto nuotando."); }
}

type Pet = Uccello | Pesce;

function esegui(animale: Pet): void {
    if(animale instanceof Uccello){
        // il compilatore sa che Pet si è ridotto a Uccello
        // quindi nessuno problema statico e suggerimento intellisence corretto
        animale.vola();
    }
    else {
        // qui invece siamo sicuramente Pet si è ridotto a Pesce
        animale.nuota();
    }
}

// PREDICATI
function isUccello(animale: Pet): animale is Uccello {
    return (animale as Uccello).vola !== undefined;
}
// : animale is Uccello corrisponde a un booleano
// facendo una type assertion restituiamo un booleano
// che rappresenta la presenta (Uccello) o meno (Pesce) del metodo "vola".
let z: Pet = new Uccello();
console.log(isUccello(z));
// OUTPUT > true











interface Campo {
    val: number;
}

function generic<T extends Campo>(x: T): number{
    return x.val;
}


function opt(x: number, email?: string): void{
    if(email){ console.log(email); }
    console.log(x);
}