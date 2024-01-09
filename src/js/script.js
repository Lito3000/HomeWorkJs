'use strict';

// Task#1
const arr1 = [1, 2, 3, 4, 5];
let sum1 = null;

for( let i = 0 ;i < arr1.length;i++){
    sum1 = sum1 + arr1[i]
}

console.log(sum1)


// Task#2
const arr = [1, 2, 3, 4, 5];
let num = null
for( let i = 0 ;i < arr.length;i++){
    num = num + Math.pow(arr[i], 2)
}

console.log(num)
