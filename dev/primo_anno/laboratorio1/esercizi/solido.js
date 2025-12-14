class Solido { }

class Parallelepipedo extends Solido {
    constructor(larghezza, altezza, profondita){
        super();
        this.l = larghezza;
        this.h = altezza;
        this.p = profondita;
    }

    superficie() {
        return (2*(this.l+this.p)*this.h + 2*this.l*this.p);
    }

    volume() {
        return (this.l *this.p * this.h);
    }
}

class Cubo extends Parallelepipedo {
    constructor(lato){
        super(lato, lato, lato);
        this.lato = lato;
    }

    superficie(){
        return (6 * this.lato*this.lato);
    }

    volume(){
        return (this.lato*this.lato*this.lato);
    }
}

class Sfera extends Solido {
    constructor(raggio){
        super();
        this.raggio = raggio;
    }

    superficie(){
        return 12.56*this.raggio*this.raggio;
    }

    volume(){
        return 4.19*(this.raggio**3);
    }
}

function sommaVolumiParallelepipedi(solidi){
    let parallelepipedi = solidi.filter(
        (solido) => (solido instanceof Parallelepipedo)
    )

    let res = 0;

    for(let parallelepipedo of parallelepipedi){
        res += parallelepipedo.volume();
    }

    return res;
}

solidi = [];
solidi.push(new Parallelepipedo(1,2,3));
solidi.push(new Cubo(5));
solidi.push(new Sfera(2));

console.log(sommaVolumiParallelepipedi(solidi));
