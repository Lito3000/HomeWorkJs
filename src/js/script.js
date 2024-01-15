'use strict';

const arr = [1, 2, 3, -1, -2, -3];
const recycledArray = function recycle(arr) {
    if ((arr.length <= 0) || (!Array.isArray(arr))) return 'array is empty'
    const positiveArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveArr.push(arr[i])
        }
    }
    if ((positiveArr.length <= 0) || (!Array.isArray(positiveArr))) return null
    else return positiveArr
}
console.log(recycledArray(arr))