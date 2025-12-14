function bogoval(s){
    let value = 0;
    for(let i = 0; i<s.length; i++){
        if(s[i] === "+"){
            value += 1;
        }
        else if (s[i] === "-"){
            value -= 1;
        }
        else{
            value += parseInt(s[i]);
        }
    }
    return value;
}

let str = "---34++";
console.log(bogoval(str));