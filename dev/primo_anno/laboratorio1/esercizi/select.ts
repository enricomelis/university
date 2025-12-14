function select_typescript(A: number[], K: number[]): number[] {
    let R: number[] = [];

    for(let el of K){
        if(el < 0 || el > A.length)
            throw new RangeError();
    }

    for(let i = 0; i < A.length; i++){
        if( K.includes(i) )
            R.push(A[i]);
    }

    return R;
}