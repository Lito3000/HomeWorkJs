'use strict'
// Task#1
const x = (a, b) => {
    return a + b
}
const result = x(40, 50)
console.log(result)

//Task#2

const string = (row) => {
  return row.length
}
const result1 = string('espresso')
console.log(result1)

//Task#3
const arr = [5,8,5,2,7,6]
const x1 = (array) => {
  for (let i =0;i< array.length;i++){
      array[i] = array[i] + 1
    }
  return arr
}
const  res = x1(arr)
console.log(res)