// Task#1
const runCallbacks = function(callback, index) {
  let result = index
  for (let i = 0; i < callback.length; i++) {
    result = callback[i](result)
  }
  return result
}
const addOne = x => x + 1;
const square1 = x => x * x;
const callbacks = [addOne, square1, addOne];
const result = runCallbacks(callbacks, 1);
console.log(result);

//Task#2

function composeFunctions(...funcs) {
  return function (value) {
    let result = value
    for (let i = funcs.length - 1; i >= 0; i--) {
      result =  funcs[i](result)
    }
    return result
  }
}

const double = x => x * 2;
const square = x => x * x;
const negate = x => -x;
const composedFunction = composeFunctions(double, square, negate);
console.log(composedFunction(2)); // Виведе: -16 (негація квадрату подвоєного 2: -((2*2)^2))

//Task#3
function fibanachi(num) {
  if (num < 2) {
    return num;
  }
  return fibanachi(num - 1) + fibanachi(num - 2);
}

console.log('result', fibanachi(5));