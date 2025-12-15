fix_len = (n, len) => {
    while(n.length < len){
        n = "0" + n;
    }
    
    return n
}

binario = (x, n_bit) => {
    let res = "";

    while(x > 0){
        res = String( x % 2 ) + res;
        x = Math.floor( x / 2);
    }

    return fix_len(res, n_bit);
}

inverti = (str) => {
    let res = "";
    for(let i=0; i<str.length; i++){
        if(str[i] == "1")
            res += "0";
        else {
            res += "1";
        }
    }
    return res;
}

function sommaBinaria(a, b){

    // rendo i due numeri dello stesso numero di bit
    let len_a = a.length;
    let len_b = b.length;
    if( len_a < len_b){
        a = fix_len(a, len_b);
        len_a = a.length;
    }
    if( len_a > len_b){
        b = fix_len(b, len_a);
        len_b = b.length;
    }

    // faccio la somma
    let c = "";
    let riporto = 0;
    for(let i = len_a-1; i>0; i--){
        let a_num = Number(a[i]);
        let b_num = Number(b[i]);

        let somma = a_num + b_num;
        if(somma + riporto <= 1){
            c = String(somma + riporto) + c;
            riporto = 0;
        }
        else {
            c = "0" + c;
            riporto = 1
        }
    }


    return c;
}

complemento_a_due = (x, n_bit) => {
    // caso base: x non rappresentabile con n bit.
    if( (x < (-2)**(n_bit-1)) || (x > 2**(n_bit-1) - 1) ){
        console.log("Il numero non è rappresentabile con questi bit, prova ad incrementarli.");
        return undefined
    }

    let res = binario(x, n_bit);
    res = inverti(res);
    res = sommaBinaria(res, "1");
    return res;
}

console.log( complemento_a_due( 5, 8 ) )

// scrivere la funzione somma_complementi_a_due() che prende in input due stringhe 
// che sono due numeri in binario scritti col complmento a due
// e restituisce la loro somma, sempre in formato complemento a due.

function somma_complementi_a_due(){}