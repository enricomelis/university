const fs = require('fs');

class GradeError extends Error {}
class InvalidCreditsError extends GradeError {}
class InvalidValueError extends GradeError {}
class DuplicatedGradeError extends GradeError {}
class MissingCreditsError extends GradeError {}

class Grade {
    #name;
    #credits;
    #date;
    #grade;
    #honors;

    constructor(nome, crediti, data, voto, lode){
        if(crediti <= 0) throw new InvalidCreditsError("I crediti devono essere un numero positivo.");
        if(voto < 18 || voto > 30) throw new InvalidValueError("Il voto deve essere compreso fra 18 e 30.");
        if(lode && voto !== 30) throw new InvalidValueError("Non si può ottenere la lode con un voto diverso da 30.");

        this.#name = nome;
        this.#credits = crediti;
        this.#date = data;
        this.#grade = voto;
        this.#honors = lode;
    }

    get name() { return this.#name }
    get credits() { return this.#credits }
    get date() { return this.#date }
    get grade() { return this.#grade }
    get honors() { return this.#honors }

    equals(g){
        return (
            (this.#name === g.name) &&
            (this.#credits === g.credits) &&
            (this.#date === g.date) &&
            (this.#grade === g.grade) &&
            (this.#honors === g.honors)
        );
    }

    toString(){
        let voto = (this.#honors) ? "30L" : this.#grade;
        return `${this.#name} (${this.#credits} CFU), in data: ${this.#date} e voto ${voto}`;
    }

    toJSON() {
        // JSON.stringify chiamerà questo metodo.
        // Se non l'avessi implementato JSON.stringify non sarebbe stato capace di leggere i membri privati
        return {
            name: this.#name,
            credits: this.#credits,
            date: this.#date,
            grade: this.#grade,
            honors: this.#honors
        }
    }
}

class GradeBook {
    #grades;
    #totalCredits;

    constructor(arr, creditiTotali){
        this.#grades = [...arr];
        this.#totalCredits = creditiTotali;
    }

    get totalCredits() { return this.#totalCredits; }

    get credits() {
        let res = 0;
        for(let el of this.#grades){
            res += el.credits;
        }
        return res;
    }

    get missingCredits() { return this.#totalCredits - this.credits; }

    get average() {
        let weightedSum = 0;
        for(let el of this.#grades){
            weightedSum += el.grade * el.credits;
        }

        return weightedSum / this.credits;
    }

    get startingGrade(){
        if( this.missingCredits > 0 ) throw new MissingCreditsError("Non si hanno crediti sufficienti per la richiesta.")
        return this.average * 110 / 30;
    }    

    register(g){
        if( !(g instanceof Grade) ) throw new TypeError("Bisogna inserire un voto di tipo corretto.");
        if( this.#grades.some( a => a.equals(g) ) ) throw new DuplicatedGradeError("Il voto è già presente.");
        this.#grades.push(g);
    }

    toString(){
        let res = "";
        let ctr = 1;
        for(let el of this.#grades){
            res = res + String(ctr) + ": " + el.toString() + "\n";
            ctr++;
        }

        return res;
    }

    exportJSON(f){
        let data = JSON.stringify({grades: this.#grades, totalCredits: this.#totalCredits});
        fs.writeFileSync(f, data);
    }

    static fromJSON(f){
        let src = fs.readFileSync(f);
        let obj = JSON.parse(src);
        let gb = new GradeBook([], obj.totalCredits);

        for(let el of obj.grades)
            gb.register( new Grade(el.name, el.credits, el.date, el.grade, el.honors) )
        
        return gb

    }

}

class BachelorGradeBook extends GradeBook { 
    constructor(arr){ super(arr, 180); } 
}

class MasterGradeBook extends GradeBook { 
    constructor(arr){ super(arr, 120); } 
}


module.exports =  {
    Grade,
    GradeBook, 
    BachelorGradeBook, 
    MasterGradeBook,
    GradeError, 
    InvalidValueError, 
    InvalidCreditsError, 
    MissingCreditsError, 
    DuplicatedGradeError
};
