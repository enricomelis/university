let funzione = (peso) => {
    return peso;
}

function valuta(T){
    if(!T) return 0;
    if(!T.figli) return T.val;

    let ris = 0;
    for(let i = 0; i < T.figli.length; i++){
        ris += valuta(T.figli[i]);
    } 
    
    return T.val(ris);
}

esempio = {
    val: funzione,
    figli: [{
        val: funzione,
        figli: [{
            val: funzione,
            figli: [{
                val: 7
            }, {
                val: funzione,
                figli: [{val: 3}]
            }, {
                val: 4
            }]
        }, {
            val: funzione,
            figli: [{val: 3}]
        }, {
            val: funzione,
            figli: [{
                val: funzione,
                figli: [{
                    val: 1
                }, {
                    val: 1
                }]
            }, {
                val: 1
            }]
        }]
    }, {
        val: 3
    }, {
        val: funzione,
        figli: [{
            val: funzione,
            figli: [{
                val: 2
            }, {
                val: funzione,
                figli: [{val: 1}]
            }]
        }]
    }]
}

console.log(valuta(esempio)); // output: 26