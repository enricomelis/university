/* Siano f e g due funzioni dai naturali ai reali, e sia [a,b] un intervallo (chiuso sia a destra che a sinistra) sui naturali.
Si scriva una funzione JavaScript domina(f,g,a,b) che restituisce true se f(n)≥g(n) per ogni n in [a,b], e false in caso contrario */

function f(n) {
    return n**(1/2);
}

function g(n) {
    return (1/2)**n;
}

// console.log(f(3));
// console.log(g(3));

function domina(f, g, a, b){
    if(a > b) {
        console.log("Inserimento dell'intervallo invalido.");
        return undefined;
    }
    else{
        for(let i = a; i <= b; i = i + 1){
            let risultato = true;
            if(f(i) < g(i)){
                risultato = false;
            }
            return risultato;
        }
    }
}

console.log(domina(f, g, 10, 20));