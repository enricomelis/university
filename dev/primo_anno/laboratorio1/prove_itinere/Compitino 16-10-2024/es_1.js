let obj_1 = {x: 1, y:3};
let obj_2 = {x: 12, y:-4};
let obj_3 = {x: 10, y:20};
let obj_4 = {x: 10, y:20};
let obj_5 = {x: -2, y:20};
let A = [obj_1, obj_2, obj_3, obj_4];
let emptyA = [];


function maxSum(arr){
    if(arr.length == 0){
        return undefined;
    }
    else {
        let max = 0;
        for(let i = 0; i< arr.length; i++){
            let curr_sum;
            if(arr[i]["x"] + arr[i]["y"] > arr[max]["x"] + arr[max]["y"]){
                max = i;
            }
        }
        return arr[max];
    }
}

// console.log(obj_1["x"]);
console.log(maxSum(A));
console.log(maxSum(emptyA));