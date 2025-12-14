// TODO: non ho voglia di finirlo

function diff(primaData, secondaData){
    let bisestile = [false, false];
    if(primaData.anno % 4 === 0 && primaData.anno % 100 !== 0)
        bisestile[0] = true;
    if(secondaData.anno % 4 === 0 && secondaData.anno % 100 !== 0)
        bisestile[1] = true;

    let anni = secondaData.anno - primaData.anno;
    let mesi = secondaData.mese - primaData.mese;
    let giorni = secondaData.giorno - primaData.giorno;

    

    return [giorni, mesi, anni];
}

let d1 = {
    giorno: 1,
    mese: 1,
    anno: 2020,
}

let d2 = {
    giorno: 2,
    mese: 2,
    anno: 2021,
}

console.log(diff(d1, d2))
