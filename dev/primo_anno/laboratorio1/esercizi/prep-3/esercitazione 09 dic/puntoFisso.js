function punto_fisso(f){
    function res(X){
        let Y = f(X);

        let keys_X = [];
        let keys_Y = [];
        for(let x in X)
            keys_X.push(x);
        for(let y in Y)
            keys_Y.push(y);

        if(keys_X.length !== keys_Y.length) return 0;
        
        for(let key in keys_X)
            if(X[key] !== Y[key])
                return 0;
        return 1;

    }
    return res;
}