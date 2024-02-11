
//Task#1 Нахождение максимального числа в масиве
const elem = [8,7,0,3,5,1]

const maxNumber = elem.reduce(function (total, number, index, array) {
  if (total < number) {
    return number;
  } else {
    return total
  }
}, 0)

console.log(maxNumber)
