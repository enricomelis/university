function minMax(a) {
    let ris = {};
    
    for (let i in a) {
        let min = Infinity;
        let max = -Infinity;
        
        for (let chiave in a[i]) {
            if (chiave < min) min = chiave;
            if (chiave > max) max = chiave;
        }
        
        ris[min] = 1;
        ris[max] = 1;
    }
    
    return ris;
}

esempio = [
    {3: 1, 4: 1, 7: 1, 12: 1}, // min = 0, max = 7
    {1: 1, 2: 1, 0: 1}         // min = 0, max = 2
    ]

console.log(minMax(esempio));