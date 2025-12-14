function sommak(A, k, d){
    let res = 0;
    for(let num of A){
        let el = String(num);
        let len = el.length;
        if(el[len - k - 1] >= d){
            res += num;
        }
    }
    return res;
}

let arr = [141, 161, 240, 2]
console.log(sommak(arr, 2, 7));