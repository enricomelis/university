String.prototype.titolo = function() {
    let upper = this.toUpperCase();
    let res = "";
    for(let l of upper){
        res += l + " ";
    }

    return res;
}