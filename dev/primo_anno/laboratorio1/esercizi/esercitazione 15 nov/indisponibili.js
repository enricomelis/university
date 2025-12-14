indisponibili = (l) => {
    let indisp = [];
    for(let i = 0; i<l.length; i++){
        if(l[i].disp === 0)
            indisp.push(l[i]);
    }

    indisp.sort( (l1, l2) => (l1.titolo > l2.titolo ? 1 : -1) );

    return indisp;
}

libri = [
    {titolo: "d", disp: 0},
    {titolo: "a", disp: 0},
    {titolo: "b", disp: 0},
    {titolo: "c", disp: 0},
    {titolo: "2", disp: 1}

]

console.log(indisponibili(libri));