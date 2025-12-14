function* range(a, b){
    var i = a;
    while(i < b){
        yield i++;
    }
}

let x = range(4, 8);

console.log(range);
console.log(x);

console.log(x.next());
console.log(x);

let y = x.next();
console.log(y);
console.log(y.value);
