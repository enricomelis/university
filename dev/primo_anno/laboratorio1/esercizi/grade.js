class GradeError extends Error {}

class InvalidCreditsError extends GradeError {}
class InvalidValueError extends GradeError {}
class DuplicateGradeError extends GradeError {}
class MissingCreditsError extends GradeError {}

const fs = require('fs');

class Grade {
    constructor(name, credits, date, grade, honors){
        this.name = name;
        if(credits < 0) throw new InvalidCreditsError("Crediti devono essere maggiori di 0.")
        else this.credits = credits;

        this.date = date;
        if(grade < 18 || grade > 30) throw new InvalidValueError("Voto deve essere compreso fra 18 e 30.");
        
        if(honors === true && grade !== "30L") throw new InvalidValueError("Voto con lode deve corrispondere a 30L");
        this.grade = grade;
        this.honors = honors;
    }

    equals(g){
        if(this.name !== g.name) return false;
        if(this.credits !== g.credits) return false;
        if(this.date !== g.date) return false;
        if(this.grade !== g.grade) return false;
        if(this.honors !== g.honors) return false;

        return true;
    }

    toString(){
        return `${this.name}, ${this.credits}, ${this.date}, ${this.grade}, ${this.honors}`;
    }
}

class GradeBook {
    constructor(grades, totalCredits){
        this.grades = grades;
        this.totalCredits = totalCredits;

        this.credits;
        for(let cred of grades)
            this.credits += cred.credits;

        this.missingCredits = totalCredits - this.credits;

        let totalWeightedGrades;
        for(let grade of grades)
            totalWeightedGrades += grade.grade * grade.credits;

        this.average = totalWeightedGrades / this.credits;
        this.startingGrade = this.average * 110 / 30;
    }

    static fromJSON(f) {
        let data;
        
        if (typeof window !== 'undefined') {
            throw new Error('Browser implementation would require async handling');
        } else {
            const fs = require('fs');
            data = JSON.parse(fs.readFileSync(f, 'utf8'));
        }
        
        const grades = data.grades.map(gradeData => 
            new Grade(
                gradeData.name,
                gradeData.credits,
                gradeData.date,
                gradeData.grade,
                gradeData.honors
            )
        );
    
        if (data.totalCredits === 180) {
            return new BachelorGradeBook(grades);
        } else if (data.totalCredits === 120) {
            return new MasterGradeBook(grades);
        } else {
            return new GradeBook(grades, data.totalCredits);
        }
    }

    register(grade) {
        if(typeof grade !== "Grade") throw new TypeError();
        
        for(let el of this.grades){
            if(el.equals(grade)) throw new DuplicateGradeError("Esame già presente.");
        }
        
        this.grades.push(grade);
    }

    toString() {
        return "palle";
    }

    get startingGrade() {
        if(this.missingCredits > 0) throw new MissingCreditsError("I crediti non sono sufficienti.")
    }

    exportJSON(f){
        const data = {
            totalCredits: this.totalCredits,
            currentCredits: this.credits,
            average: this.average,
            startingGrade: this.missingCredits > 0 ? null : this._startingGrade,
            grades: this.grades.map(grade => ({
                name: grade.name,
                credits: grade.credits,
                date: grade.date,
                grade: grade.grade,
                honors: grade.honors
            }))
        };
        fs.writeFileSync(f, JSON.stringify(data));
    }
}

class BachelorGradeBook extends GradeBook {
    constructor(grades){
        super(grades, 180);
    }
}

class MasterGradeBook extends GradeBook {
    constructor(grades){
        super(grades, 120);
    }
}

