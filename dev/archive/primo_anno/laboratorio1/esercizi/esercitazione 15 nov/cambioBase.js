function cambioBase(n, b1, b2){
    // b1 -> 10
    let dec = 0;
    for (c in n){
        dec += (b1**c) * n[n.length - 1- c];
    }
    console.log("Decimale: ", dec);

    // 10 -> b2
    let str = "";
    while (dec > 0){
        let resto = dec % b2;
        str = String(resto) + str;
        dec = Math.floor(dec / b2);
    }


    console.log("In base ", b2, " -> ", str);
}

cambioBase("10101", 2, 3);