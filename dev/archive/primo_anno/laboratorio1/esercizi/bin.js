class UnsuitableNumberError extends Error {}

function* bin(n){
    if( n <= 0)
        throw new UnsuitableNumberError("Numero deve essere maggiore strettamente di 0.");

    while(n > 0){
        yield n%2;
        n = Math.floor( n/2 );
    }
}