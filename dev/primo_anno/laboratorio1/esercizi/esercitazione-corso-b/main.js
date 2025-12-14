const gradebook = require('./gradebook.js')

let x = new gradebook.Grade("Melis", 9, "13 Dicembre 2024", 30, true);
let a = new gradebook.Grade("Leone", 15, "13 Marzo 2025", 28, false);
let b = new gradebook.Grade("Pagani", 9, "13 Dicembre 2024", 26, false);
let c = new gradebook.Grade("Nannicini", 12, "28 Gennaio 2025", 22, false);

let gb = new gradebook.BachelorGradeBook([x, a, b, c]);
console.log(gb.toString())