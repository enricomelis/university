function cambioBase(n: string, b1: number, b2: number): string {
    let str: string = "";
    let dec: number = 0;
    for(let i = 0; i < n.length; i++){
        dec += ( b1 ** i * Number( n[n.length - 1 - i] ) );
    }

    console.log("Decimale: " + String(dec));
    
    while(dec > 0){
        let resto: number = dec % b2;
        str = String(resto) + str;
        dec = Math.floor(dec / b2);
    }

    return str;
}

let b2: number = 3;
console.log(`In base ${b2}`, cambioBase("10101", 2, b2));