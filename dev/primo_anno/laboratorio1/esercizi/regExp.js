function matricolaValida(m){
    let mat = String(m);
    let exp = new RegExp("^[0-9]{6}$");

    return exp.test(mat);
}

function emailStudenteUnipiValida(e){
    let email = String(e);

    let exp = new RegExp("^[a-z]{1}\.[a-z]+(?:[1-9]\d*)?@studenti\.unipi\.it$");

    // ! SPIEGAZIONE DELL'ESPRESSIONE:
    // ^ inizio
    // [a-z]{1} un carattere dell'alfabeto minuscolo con una occorrenza
    // \. un punto fra iniziale del nome e cognome
    // [a-z]+ una o più occorrenze di lettere dell'alf. min. per il cognome
    // (?:...) un gruppo non catturante -> 
    // [1-9] cifra iniziale da 1 a 9
    // \d* qualsiasi cifra con zero o più occorrenze
    // (...)? l'intero gruppo è opzionale
    // @... l'espresione termina esattamente col suffisso specificato
    // $ fine

    return exp.test(email);
}

// console.log(matricolaValida(123456));
console.log(emailStudenteUnipiValida("e.melis4@studenti.unipi.it"))