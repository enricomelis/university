magicMap = (A, f) => {
    for (i in A){
        A[i] = f(A[i]);
    }
    return A;
}

sqr = (x) => x**2;
array = [1, 2, 3, 4, 5, 6];

console.log(magicMap(array, sqr));