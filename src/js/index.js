// Task#1
const runCallbacks = function(callback, index) {
    let y = null
    for (let i = 0; i < callback.length; i++) {
        y = y + callback[i](index)
    }
    return y
}
const addOne = x => x + 1;
const square = x => x * x;
const callbacks = [addOne, square, addOne];
const result = runCallbacks(callbacks, 1);
console.log(result);

