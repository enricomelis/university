// tutto ciò che viene scritto in questo file deriva
//   da una sessione di studio dal capitolo 6 del CLRS
// l'Heap è una struttura dati derivante da un albero binario

let heap = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1];

const heap_parent = (idx) => { return Math.floor(idx/2); }
const heap_leftChild = (idx) => { return (2*idx + 1); }
const heap_rightChild = (idx) => { return (2*idx + 2); }

// la funzione max_heapify prendere un array a un indice
//   da cui partire a controllare la condizione di max-heap.
// inizia calcolando i figli e confrontandoli con il nodo
//   interessato, per stabilire chi abbia il valore maggiore.
//   nel caso ci sia qualcuno fuori posto, viene scambiato
//   per fare in modo che il nodo chiamante rispetti la 
//   proprietà.
// la funzione viene successivamente chiamata ricorsivamente
//   sul nodo che è stato scambiato

function max_heapify(arr, idx){
    let left_idx = heap_leftChild(idx);
    let right_idx = heap_rightChild(idx);
    let largest = undefined; 
    
    if(left_idx <= arr.length && arr[left_idx] > arr[idx])
        largest = left_idx;
    else
        largest = idx;

    if(right_idx <= arr.length && arr[right_idx] > arr[largest])
        largest = right_idx;

    if(largest !== idx){
        let tmp = arr[largest];
        arr[largest] = arr[idx];
        arr[idx] = tmp;

        max_heapify(arr, largest);
    }

    // return arr;
}

let arr = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1];

max_heapify(arr, 1);

// console.log(arr);


let new_arr = [3, 6, 2, 9, 10, 12, 1, 3, 4];

function build_max_heap(arr){
    let n = arr.length;
    for(let i = Math.floor(n/2); i>=0; i--){
        max_heapify(arr, i);
    }
}

build_max_heap(new_arr);

// console.log(new_arr);

function heapsort(arr){
    let n = arr.length;
    build_max_heap(arr);

    let res = [];

    for(let i = n-1; i >= 0; i--){
        let tmp = arr[0];
        arr[0] = arr[i];
        arr[i] = tmp;

        res.unshift( arr.pop() );

        max_heapify(arr, 0);
    }

    return res;
}

let x = [3, 6, 2, 9, 10, 12, 1, 3, 4, 11];

console.log("array iniziale: ", x);
console.log("array finale: ", heapsort(x));
