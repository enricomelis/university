function duplicati(arr){
    arr.sort( (a, b) => a - b );

    let i = 0;
    while(i < arr.length){
        if(arr[i] === arr[i + 1])
            return true;
        else i++;
    }
    return false;
}

let esempio = [0, 1];
console.log(duplicati(esempio));