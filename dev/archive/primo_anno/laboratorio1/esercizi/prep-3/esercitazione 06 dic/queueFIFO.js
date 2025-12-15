// implementazione di una coda con oggetti

const creaCoda = () => {
    return {val: undefined};
}

// decidiamo che la testa della coda è l'oggetto più annidato

const myEnqueue = (coda, valore) => {
    let current = coda;
    while(current.next != undefined)
        current = current.next;
    current.next = {val: valore}
}

const myDequeue = (coda) => {
    let x = coda.next;
    coda.next = coda.next.next;
    delete x.next;
    return x;
}

const myMoveToFront = (coda, valore) => {
    let attuale = coda;
    let prossimo = coda.next;
    while(prossimo.val !== valore){
        attuale = attuale.next;
        prossimo = prossimo.next;
    }
    console.log(attuale.val, prossimo.val);

    attuale.next = prossimo.next;
    prossimo.next = coda.next;
    coda.next = prossimo
}

let q = creaCoda();

console.log(q)

myEnqueue(q, 5);
myEnqueue(q, 4);
myEnqueue(q, 3);
myEnqueue(q, 4);
console.log(q);

// q = {4} -> {5} -> {3} -> {4}
myMoveToFront(q, 3)
// q = {3} -> {4} -> {5} -> {4}
console.log(q);