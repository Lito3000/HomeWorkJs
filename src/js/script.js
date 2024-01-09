'use strict';



let sum = null;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let line = null
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
        sum = sum + arr[i];
        line = line + arr[i] + ' ';
    }else if
      (arr[i] === 14){
      break
  }
}
console.log(sum,line)
