function raggruppaPersone(p) {
    let res = {}

    for(let i = 0; i<p.length; i++){
        console.log(p[i].annonascita);
    }

    return res;
}

var persone = [
    {'nome': 'Leonardo da Vinci', 'annonascita': 1452, 'luogonascita': 'Vinci'},
    {'nome': 'Pietro del Donzello', 'annonascita': 1452, 'luogonascita': 'Firenze'},
    {'nome': 'Davide Ghirlandaio', 'annonascita': 1452, 'luogonascita': 'Firenze'},
    {'nome': 'Leonardo Fibonacci', 'annonascita': 1170, 'luogonascita': 'Pisa'}
]

console.log(raggruppaPersone(persone));