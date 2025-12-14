// estensione "tecnica" del console.log per visualizzare nella pagina html
console.log = function(...args) { document.getElementById("console").value += [...args].join(" ")+"\n" }

var x = 10
console.log(`f(${x}) = ${x*x}`);


//punto(-3,-4);
//linea(2,1,4,8)

// parabola tra -5 e 5
for (var x = -50; x<=50; x=x+0.1) {
  let valoreParabola = 2*x*x + 5*x - 1/8;
  punto(x,(x/2)-1)
}  

let z = -5;

let p = (z) => {return z*z}; // DICHIARAZIONE FUNZIONE: z si chiama parametro FORMALE
let ris = 5 + p(5); // CHIAMATA FUNZIONE: 5 si chiama parametro ATTUALE
console.log(ris, p(5));


// calcolo durata programma
start = Date.now();
/*for (x = -5; x < 5; x = x + 0.1) {
  punto(x, Math.sin(x));
}

for (x = 0; x < 50; x = x + 0.1) 
    punto(x, Math.pow(2,x));*/

end = Date.now();
console.log("tempo", end-start);

// disegno parabola a punti
//let parabola = (x => (1/8 + x**2 - 30))

/*for (x = -30; x < 30; x+=0.1) {
  punto(x, parabola(x));
}

linea(-30, parabola(0), 30, parabola(0))*/

// estendiamo su qualsiasi funzione 
// funzione per disegnare una funzione

/*colore("#fa07aa")
function plotta(fToPlot,a,b,prec) {
  for (x = a; x < b; x+=prec) {
    punto(x, fToPlot(x));
  }
}*/

// invoco la funzione plotta
//plotta(parabola, -30, 30, 0.1)
//colore("#0000ff")
//plotta(Math.sin, -30, 30, 0.1) 

// altra parabola
/*parabola = (x) => x**2;
plotta(parabola, -30, 30, 0.1)*/

// calcolo minimo di una funzione in un intervallo

/*function trovaMin (f, a, b, step) {
  var min = Infinity;
  var xmin = NaN;
  for (x = a; x < b; x=x+step) {
    if (f(x) < min){
      min = f(x);
      xmin = x;
    }
  }
  console.log(`minimo di ${f} in ${xmin}: ${min}`)
}*/

//trovaMin(parabola, -5,5,0.01);

// altra parabola
/*var f = (x) => (x-0.1)**2;
plotta(f,-5,5,0.1);
trovaMin(f, -5,5,0.01);*/

//disegnare una linea con primitiva linea
/*function plotta2(f, a, b, prec){
  let x0 = a;
  let y0 = f(a);
  let x1 = undefined;
  let y1 = undefined;

  for (let x = a+prec; x < b; x = x + prec) {
    x1 = x;
    y1 = f(x1);
    
    linea(x0, y0, x1, y1);
    
    y0 = y1;
    x0 = x1;
  }
}*/


//disegnare una linea con primitiva linea
/*function plotta2(f,a,b, step) {
  let x0, y0; // qui sia x0 che y0 sono undefined

  for (var x = a; x <= b; x=x+step) {
    if (x0 != undefined) 
      linea(x0, y0, x, f(x));
    x0 = x; // memorizzo il valore precedente
    y0 = f(x);
    //punto (x,f(x));
  }
}

colore("#aa0000")
plotta2((x) => x**2, -5, 5, 1);*/

//let f = x => 1/10*x**2 - 2*x - 10
//colore("#00aa00")
//plotta2(f,-50,50)

// esercizio: altra parabola
//f = (x) => (x+0.1)**2;
//plotta2(f,-5,5);
//trovaMin(f, -5,5,0.01);

/*plotta2(x => Math.log(x), 0, 50, 0.1)
colore("#0000aa")
plotta2(x => x**2, 0, 50, 1)
colore("#00aa00")
plotta2(x => Math.pow(2,x), 0, 50, 1)
plotta2(x => 3*x+2, 0, 50, 1)
colore("#aa0000")
plotta2(x => x*Math.log(x), 0, 50, 1)
*/