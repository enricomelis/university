function primoDellaClasse(C){


    let num = -1;
    let stu = {};

    for(let studente of C){
        if(studente.voti.length > num){
            num = studente.voti.length;
            stu = studente;
        }
    }
    

    return stu;
}


var C=[
    {nome:"Giuseppe", matricola: "152403", voti: [18, 24, 30, 26]},
    {nome:"Jacopo", matricola: "433710", voti: [30, 26, 28, 28, 25]},
    {nome:"Vincenzo", matricola: "150300", voti: [28, 22, 30, 30, 27, 28]},
    {nome:"Alina", matricola: "610292", voti: [30, 26, 30, 24, 22, 27]},
    {nome:"Tommaso", matricola: "630181", voti: [25, 24, 28, 30, 21, 26]}
]

// console.log(C[0].voti.length);
console.log(primoDellaClasse(C));