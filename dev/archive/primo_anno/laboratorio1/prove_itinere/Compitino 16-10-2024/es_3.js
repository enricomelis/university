/*Si scriva una funzione JavaScript paren(n) che, dato come argomento un naturale n>0, 
restituisca una stringa composta da una coppia di parentesi intorno al numero 1, seguita 
da una doppia coppia intorno al numero 2, seguita da una tripla coppia intorno al numero 3, 
e così via fino a raggiungere n.*/

function paren(n){
    let stringa_inizio = "";
    let stringa_fine = "";
    let risultato = "";
    for(let i = 1; i<=n; i++){
        stringa_inizio += "(";
        stringa_fine += ")";
        risultato = risultato + stringa_inizio + i + stringa_fine;

    }
    return risultato;
}

console.log(paren(2));