enum Code {
    "White" = 0,
    "Green" = 1,
    "Yellow" = 5,
    "Red" = 10,
}

enum Age {
    "Adult" = 0,
    "Elder" = 1,
    "Child" = 2,
    "Baby" = 5,

}

type Urgency = [Code, Age]

function triage(patients: Urgency[]){
    patients.sort(
        (a, b) => {
            let pA: number = a[0] + a[1];
            let pB: number = b[0] + b[1];

            if(pA === pB){
                return a[0] - b[0]
            }
            else {
                return pA - pB;
            }
        }
    );
}