function nuovaPila(){
    let res = [];

    

    return {
        impila: function (x) {
            res.push(x)
        },
        depila: function () {
            return (res.length > 0) ? res.pop() : undefined 
        }
    };
}