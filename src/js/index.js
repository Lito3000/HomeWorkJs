
//Task#1 Сумма элементов массива
const elem = [8,7,0,3,5,1]

const sumFunction = elem.reduce(function (accum,item){
  accum = accum + item
return accum
},0)

console.log(sumFunction)
