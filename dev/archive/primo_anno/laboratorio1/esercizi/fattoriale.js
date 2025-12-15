// (Fattoriale) Si scriva un programma che dato un intero n calcoli e stampi il suo fattoriale.
// Si ricorda che il fattoriale di n è n! = 1*2*....*(n-1)*n


let n = 5;
let fatt_n = 1;
for(let i = n; i >= 1; i--){
    fatt_n *= i;
}
console.log(`Il fattoriale di ${n} è: ${fatt_n}`);