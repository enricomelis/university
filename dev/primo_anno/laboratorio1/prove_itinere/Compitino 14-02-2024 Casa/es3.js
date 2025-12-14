String.prototype.toU = function () {
    let res = "";

    for(let i = 0; i<this.length; i++){
        console.log(this.charAt(i));
        switch(this.charAt(i)){
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                res += "u";
                break;
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":
                res += "U";
                break;
            default:
                res += this.charAt(i);
                console.log(res);
                break;
        }
    }


    return res;
}
