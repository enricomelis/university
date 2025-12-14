class Libro {
    constructor(titolo, autore, pagine){
        this.titolo = titolo;
        this.autore = autore;
        this.pagine = pagine;
        this.disponibile = true;
    }

    presta(){
        if(this.disponibile){
            this.disponibile = false;
            return true;
        }
    }

    restituisci(){
        this.disponibile = true;
    }

    info(){
       return `${this.titolo} di ${this.autore} con ${this.pagine} pagine.`
    }
}

const Siddharta = new Libro("Siddharta", "Herman Hesse", 100);

console.log(Siddharta.info());
console.log(Siddharta.presta());