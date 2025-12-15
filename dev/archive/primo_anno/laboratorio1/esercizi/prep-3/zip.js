function zip(o){
    let ris = [];
    let i = 0;
    for (let key in o){
        ris.push([key, o[key]]);
    }
    return ris.sort(
        (a, b) => (a[0] < b[0] ? -1 : 1)
    );
}

function unzip(A){
    let ris = {};
    for(let i=0; i<A.length; i++){
        ris[A[i][0]] = A[i][1];
    }
    return ris;
}