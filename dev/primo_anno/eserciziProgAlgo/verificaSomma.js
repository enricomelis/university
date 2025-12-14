verificaSomma = (A) => {
    let i=1;
    let sum = A[0];

    while(i<A.length-1){
        console.log(A[i], sum);
        if(A[i] !== sum)
            return false;
        sum += A[i];
        i++;
    }

    return true;
}

console.log(verificaSomma([1, 1, 2, 4, 8]));