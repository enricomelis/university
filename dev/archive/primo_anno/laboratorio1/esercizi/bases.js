class UnknownBaseError extends Error {}

const bases = {
    "A": 1,
    "T": 1,
    "C": 1,
    "G": 1,
}

function* unfold(frammento) {
    let i = 0;
    while(i < frammento.length) {
        if( bases[ frammento[i] ] !== 1 )
            throw new UnknownBaseError("Il frammento contiene basi sconosciute")
        else yield frammento[i];  
        i++;
    }
}