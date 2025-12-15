function bellaRic2(n) {
    if(n < 10) return n;
    else {
        let somma = 0;
        let ntemp = n;
        while(ntemp != 0){
            somma += (ntemp % 10);
            ntemp = Math.floor(ntemp / 10);
        }
        if(somma%2 != 0) return bellaRic2(somma);
        else return bellaRic2(n-1);
    }
}

console.log(bellaRic2(5));