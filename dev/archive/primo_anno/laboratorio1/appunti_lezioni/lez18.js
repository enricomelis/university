cambioBase = (x, base) => {
    let i = x;
    let resto = 0;
    let str = "";
    while(i>0){
        resto = i % base;
        i = Math.floor(i/base);
        str = resto + str;
    }
    let ris = Number(str);

    return ris;
}

// console.log(cambioBase(154, 5));

complemento_a_uno = (x, n_bit) => {
    // caso base: x non rappresentabile con n bit.
    if( (x < (-2)**(n_bit-1)) || (x > 2**(n_bit-1) - 1) ){
        console.log("Il numero non è rappresentabile con questi bit, prova ad incrementare.");
        return undefined
    }


    let i = Math.abs(x);
    let resto = 0;
    let ris = [];
    for(let j = 0; j<n_bit; j++){
        resto = i % 2;
        i = Math.floor(i/2);
        ris.unshift(resto);
    }

    if(x < 0) ris[0] = 1;
    let str = "";
    for(let el of ris){
        str += el;
    }

    return str;
}

binario = (x, n_bit) => {
    let res = "";

    while(x > 0){
        res = String( x % 2 ) + res;
        x = Math.floor( x / 2);
    }

    while(res.length < n_bit){
        res = "0" + res;
    }

    return res;
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


// console.log( complemento_a_due(32722, 16) );

// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

fix_len = (n, len) => {
    while(n.length < len){
        n = "0" + n;
    }
    
    return n
}

// console.log( fix_len( "0100", 8 ) );

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

// console.log(complemento_a_due(4, 8));

function sommaBinaria(a, b){
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

    let c = "";
    let riporto = 0;
    for(let i = len_a-1; i>0; i--){
        let a_num = Number(a[i]);
        let b_num = Number(b[i]);
        // console.log(a_num, b_num);

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
    if(riporto === 0)
        return c;
    else 
        return [riporto, c];
}

// let x = sommaBinaria( complemento_a_due(-5, 8), complemento_a_due(12, 8) );
// console.log( x, conversione_base(2, 10, x) )
// console.log(sommaBinaria( complemento_a_due(4, 8), complemento_a_due(4, 8) ));
// console.log( complemento_a_due(-4, 8) )

function conversione_neg(n){
    
}


// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------


function conversione_base(b_1, b_2, n){
    let n_10 = 0;

    for(let i = 0; i<n.length; i++){
        n_10 += Number(n[n.length - i - 1]) * (b_1**i);
    }

    // console.log(n_10);
    let str = "";
    while(n_10 > 0){
        str = String( n_10 % b_2 ) + str;
        n_10 = Math.floor(n_10 / b_2);
    }

    return str;
}

// console.log(conversione_base(5, 9, "11110"));

function rappresentazione_binaria(n_10, bit){
    let str = ""
    while(n_10 > 0){
        str = String( n_10 % 2 ) + str;
        n_10 = Math.floor(n_10 / 2);
    }

    while(str.length !== bit){
        str = "0" + str;
    }

    return str;
}

// console.log( rappresentazione_binaria(30) );

function rimozione(a, b){
    if(a.length === b.length){
        let i = 0;
        let c = "";
        while(i < a.length){
            if(a[i] === "1")
                c += String( Number(a[i]) - Number(b[i]) )
            else c += "0"
            i++;
        }
        return c;
    }
    return null;
}
// console.log(rappresentazione_binaria(6, 4), rappresentazione_binaria(2, 4))
// console.log( rimozione( rappresentazione_binaria(6, 4), rappresentazione_binaria(2, 4) ) );

function contaUni(a){
    let ctr = 0;
    for(let i = 0; i<a.length; i++){
        if(a[i] === "1")
            ctr++;
    }
    return ctr;
}

// console.log(rappresentazione_binaria(10, 8), contaUni( rappresentazione_binaria(10, 8) ) );

function codificaDecimaleBitMap(arr){
    if(arr.length !== 8) return null;
    let str = "";
    let res = [];
    let i = 0;
    for(byte of arr){
        str = "";
        for(bit of byte){
            str += String(bit)
        }
        res[i] = Number(conversione_base(2, 10, str));
        i++
        // console.log(str);
    }
    return res;
}

let esempio = [
    [0, 0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0]
]

// console.log( codificaDecimaleBitMap(esempio) )