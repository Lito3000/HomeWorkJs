// Task#1
function runCallbacks(callbacks, value) {
    return callbacks.reduce((accumulator, currentCallback) => currentCallback(accumulator), value);
}
const addOne = x => x + 1;
const square = x => x * x;
const callbacks = [addOne, square, addOne];
const result = runCallbacks(callbacks, 1);
console.log(result);

