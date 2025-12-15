let numbers = [-3, 4, 6, 8, 12, -4];

function ordina (array) {
    let temp;

    for(let i = 0; i<6; i++){
        for(let j = i+1; j<6; j++){
            if(array[i] > array[j]){
                temp = array[i];
                array[i] = array[j]
                array[j] = temp;
            }
        }
    }
}

ordina(numbers);

for (i in numbers){
    console.log(numbers[i]);
}