myPush = (A, e) => {
    let l = A.length;
    A[l] = e;

    return A.length;
}

// console.log(myPush(arr = [1, 2, 3], 4), arr)

myPop = (A) => {
    let newL = A.length - 1;
    let x = A[newL];
    A.length = newL;

    return x;
}
// console.log(myPop(a = [1, 2, 3, 4]), a);


myFindIndex = (Arr, P) => {
    for(let i = 0; i<Arr.length; i++){
        if(P(Arr[i]))
            return i;
    }
    return false;
}
propPari = (el) => {return (el%2 === 0) ? true : false}

// console.log(myFindIndex(a = [1, 2, 3], propPari));

myFilter = (Arr, P) => {
    let filtrato = [];
    for(let i = 0; i<Arr.length; i++){
        if(P(Arr[i]))
            myPush(filtrato, Arr[i]);
    }
    return filtrato;
}

// console.log(myFilter( a = [1, 2, 3, 4, 5, 6], propPari ) );

// ---- esempi di uso di splice() ----

my_arr = [1, 2, 3, 4, 5, 6, 7, 8];
// my_arr.splice(2, 3);                         // expected: [1, 2, 6, 7, 8]
// my_arr.splice(4, 0, 100);                    // expected: [1, 2, 3, 4, 100, 5, 6, 7, 8]
// my_arr.splice(4, 1, 200);                    // expected: [1, 2, 3, 4, 200, 6, 7, 8]
console.log(my_arr)

// la funzione splice( start, deleteCount, items ) si legge come: 
//     rimuovi "deleteCount" elementi, dopo la posizione "start"
//     e aggiungi "items" elementi dopo la posizione "start".