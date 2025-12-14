// let trovaAlbero = (T, v) => {
//     if(!T || !T.figli) return {}
//     if(T.val == v)
//         return T
//     else {
//         for(let i of T.figli){
//             return trovaAlbero(i, v)
//         }
//     }
// }

// let inserisci = (T, v, t) => {
//     if(!T) return {}
//     for(let i in T.figli){
//         if(T.figli[i].val == v){
//             T.figli[i] = t
//         }
//     }
// }

// function innesta(T1, v1, T2, v2){

//     let A = trovaAlbero(T1, v1);
//     let B = trovaAlbero(T2, v2);



//     inserisci(T1, v1, B);
//     inserisci(T2, v2, A);


// }


var T1={val: 5, figli:[
    {val:3, figli: [{val:0}]},
    {val:7},
    {val:1, figli: [
        {val:4, figli:[
            {val: 6, figli:[{val:14}]},
            {val: 10}
        ]},
        {val:2},
        {val:9}
    ]}
]}

let trovaAlbero = (T, v) => {
    if(!T) return {}

    if(T.val == v)
        return T
    else {
        for(let i in T.figli){
            if(T.figli){
                let x = trovaAlbero(T.figli[i], v);
                return x;
            }
        }
    }
}

console.log(trovaAlbero(T1, 4))

function innesta(T1, v1, T2, v2){

    let A = trovaAlbero(T1, v1);
    let B = trovaAlbero(T2, v2);


}