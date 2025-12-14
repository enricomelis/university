esempio = {
    val: 2,
    sx: {
        val: 0
    },
    dx: {
        val: 3
    }
}

function belBT(T, x){
    if(!T) return false;
    return ((T.val===x) ? true : (belBT(T.sx, x) || belBT(T.dx, x)));
}

console.log(belBT(esempio, 3));

function sumBT(T){
    if(!T) return 0;
    return (sumBT(T.sx) + sumBT(T.dx) + T.val);
}

console.log(sumBT(esempio));

function visitaSimmetrica(T, str = ""){
    if(!T) return "";

    return visitaSimmetrica(T.sx) + String(T.val) + visitaSimmetrica(T.dx);
}

array_ify = (str) => {
    let arr = [];
    for(let i = 0; i<str.length; i++){
        arr.push(str[i])
    }
    return arr
}


console.log(array_ify(visitaSimmetrica(esempio)));