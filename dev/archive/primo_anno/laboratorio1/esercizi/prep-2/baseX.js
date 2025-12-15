function convert(n, b){
    let nuovo = "";
    let resto = 0;
    while(n > 0){
        resto  = n%b;
        nuovo = resto + nuovo;
        n = Math.floor(n/b);
    }

    return nuovo;
}

// console.log(convert(24, 3));

function rev(str, b){
    let num = 0;

    for(let i=str.length-1; i>=0; i--){
        l = str.length - 1
        curr = Number(str[i]);
        console.log(curr);
        num += curr * b**(l-i);
    }       

    return num;
}

console.log(rev("220", 3));