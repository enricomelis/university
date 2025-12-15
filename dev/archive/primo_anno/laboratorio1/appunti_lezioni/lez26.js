// console.log({nome: "ciao"}.length); // output: undefined
// console.log([1, 2, 3].__proto__);   // output: Object(0) []


function Costruttore(a, b){
    this.nome = a;
    this.eta = b;
    this.compleanno = function() {
        this.eta++;
    }
}

let pippo = new Costruttore("pippo", 30);

console.log(pippo.__proto__);                               // output: {}
console.log(pippo.__proto__ == Costruttore.prototype);      // output: true

// "stiamo legando una fabbrica di persone
//   ai suoi fabbricati con un bollino".
//
//
// possiamo anche aggiungere funzionalità tramite
//   un figlio al padre, rendendo la funzionalità
//   accessibile anche ai figli


// le classi sono solo un minimo cambiamento sintattico
//   di ciò che abbiamo visto coi prototipi

class Persona{
    constructor(nome, eta){
        this.nome = nome;
        this.eta = eta;
    }

    compleanno() {
        this.eta++;                         // questo metodo è inserito automaticamente nel prototipo
    }
}

console.log(Persona);                       // [class Persona] 
let pluto = new Persona("pluto", 20);       // Persona {...}
console.log(typeof Persona);                // function

