function sommak(A, k, d) {
    let sum = 0;
    let arr_str = [];
    let len = A.length;
    for(let i = 0; i<len; i++){
        arr_str[i] = String(A[i]);
    }

    for(let j=0; j<len; j++){
        let char_len = arr_str[j].length;
        if(arr_str[char_len - k -1] > d){
            sum += A[j];
        }
    }


    return sum;
}


console.log(sommak([141,161,240,2],1,4)); // 542
console.log(sommak([141,161,240,2],0,0)); // 544
console.log(sommak([141,161,240,2],2,7)); // 0