function tunnel(convoy, max_height){
    if (convoy === undefined || convoy.length == 0){
        return [];
    }
    let res = [];
    for(let i = 0; i < convoy.length; i++){
        if(convoy[i].altezza < max_height)
            res.push(convoy[i]);
    }

    return res;
}

function tunnel_in_place(convoy, max_height){
    if (convoy === undefined || convoy.length == 0){
        return [];
    }
    let i = 0;
    while(i < convoy.length){
        if(convoy[i].altezza >= max_height){
            convoy.splice(i, 1);
        }
        else i++;
    }
    return convoy;
}

arr = [
    {
        tipo: "macchina1",
        altezza: 12.2
    },
    {
        tipo: "macchina2",
        altezza: 4
    },
    {
        tipo: "macchina3",
        altezza: 5
    },
    {
        tipo: "macchina4",
        altezza: 3
    }
]

console.log(tunnel_in_place(arr, 5));