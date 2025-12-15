combina = (left, right) => {
    let ris = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            ris.push(left[i]);
            i++;
        } else {
            ris.push(right[j]);
            j++;
        }
    }

    ris = ris.concat(left.slice(i)).concat(right.slice(j));

    return ris;
};

function mergeSort(A, fst = 0, lst = A.length - 1) {
    if (fst === lst) return [A[fst]];

    let mdx = Math.floor((fst + lst) / 2);
    let arr_sx = mergeSort(A, fst, mdx);
    let arr_dx = mergeSort(A, mdx + 1, lst);

    return combina(arr_sx, arr_dx);
}

const arr = [2, 4, 3, 6, 1, 7, 3, 12];
const sorted = mergeSort(arr);

console.log("Iniziale: ", arr);
console.log("Ordinato: ", sorted);
