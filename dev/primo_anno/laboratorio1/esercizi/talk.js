class Talk {
    constructor(title, speaker, duration){
        this.title = title;
        this.speaker = speaker;
        this.duration = duration;
    }
}

class Lecture extends Talk {
    constructor(title, speaker, duration, course){
        super(title, speaker, duration);
        this.course = course;
    }

    get teacher(){ return this.speaker; }
    set teacher(t){ this.speaker = t; }
}

class Seminar extends Talk {
    constructor(title, speaker, duration, event){
        super(title, speaker, duration);
        this.event = event;
    }
}

class Webinar extends Seminar {
    constructor(title, speaker, duration, event){
        super(title, speaker, duration, event);
    }
}

function pickSeminar(talks){
    let seminars = talks.filter(
        (talk) => (
            (talk instanceof Seminar) 
        )
    );


    if(seminars.length == 0) return undefined
    else {
        let max = {duration: -Infinity};
        for(let seminar of seminars){
            if(seminar.duration > max.duration){
                max = seminar;
            }
        }
        return max.title;
    }

}

// --- debugging stuff ---

let x = new Seminar("1", "a", 10, "c");
let y = new Seminar("2", "a", 9, "b");
let z = new Lecture("Palle", "Culo", 90, "de");
let a = new Webinar("Ciao", "ciao", 10, "de");

let talks = [
    new Lecture("TypeScript I","J. Soldani",120,"Laboratorio 1"),
    new Seminar("Deep Learning in 10'","D. Bacciu",10,"The ML Conference"),
    new Lecture("TypeScript II","J. Soldani",120,"Laboratorio 1"),
    new Lecture("Ricorsione","G. Prencipe",120,"Programmazione & Algoritmica"),
    new Webinar("Human Computer Interaction","A. Malizia",100,"HCI"),
    new Seminar("Synchronized Dancing of Oblivious Chameleons","G. Prencipe",60,"FUN"),
    new Webinar("Microservices 101","J. Soldani",30,"MC Research Webinars"),
    new Lecture("Ricorsione","G. Prencipe",120,"Programmazione & Algoritmica")
]

console.log(
    pickSeminar(talks)
);
