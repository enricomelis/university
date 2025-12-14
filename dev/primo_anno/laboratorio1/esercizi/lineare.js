function visitaStringa(a, res){
    if(!a) return ;
    
    for(let i = 0; i < a.length; i++){
        if(typeof a[i] === "string"){
            res.push(a[i]);
        }
        else {
            visitaStringa(a[i], res);
        }
    }
}

function lineare(a){
    let res = [];

    visitaStringa(a, res);

    return res;
}