interface Obj {
    price: number;
    name?: string;
}

enum Ordinamento {
    Crescente = 0,
    Decrescente,
}

function sortByPrice<T> (arr: Obj[], ord: Ordinamento) {
    arr.sort(
        (a, b) => {
            if(ord == Ordinamento.Crescente){
                return a.price - b.price;
            }
            else {
                return b.price - a.price;
            }
        }
    );
}

let x: Obj = { price: 1, name: "x" }
let y: Obj = { price: 2, name: "y" }
let z: Obj = { price: 3, name: "z" }
let o: Ordinamento = Ordinamento.Decrescente;

let array = [x, y, z];
sortByPrice(array, o);
console.log(array.map(e => e.name))