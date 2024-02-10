
Array.prototype.myReduce = function (fn, acc) {
    for (let i = 0; i < this.length; i++) {
        acc = fn(acc, this[i], i, this);
    }
    return acc
};
function runCallbacks(backs, value) {
    return backs.myReduce(function (accumulator, currentCallback) {
        return  currentCallback(accumulator)
    }, value);
}
const addOne = x => x + 1;
const square1 = x => x * x;
const callbacks = [addOne, square1, addOne];
const result = runCallbacks(callbacks, 1);
console.log(result);

function composeFunctions(...funcs){
    console.log(funcs)
    return function (value){
        return funcs.reduceRight(function(currentValue,currentFunc){
            return currentFunc(currentValue)
        },value);
    }
}


const double = x => x * 2;
const square = x => x * x;
const negate = x => -x;
const composedFunction = composeFunctions(double, square, negate);
console.log(composedFunction(2)); // Виведе: -16 (негація квадрату подвоєного 2: -((2*2)^2))


// function composeFunctions(...funcs){
//     console.log(funcs)
//     return function (value){
//         return funcs.reduceRight(function(currentValue,currentFunc){
//             return currentFunc(currentValue)
//         },value);
//     }
// }
//
//
// const double = x => x * 2;
// const square = x => x * x;
// const negate = x => -x;
// const composedFunction = composeFunctions(double, square, negate);
// console.log(composedFunction(2)); // Виведе: -16 (негація квадрату подвоєного 2: -((2*2)^2))


// Task#1
// function runCallbacks(callbacks, value) {
//     return callbacks.reduce((accumulator, currentCallback) => currentCallback(accumulator), value);
// }
// const addOne = x => x + 1;
// const square = x => x * x;
// const callbacks = [addOne, square, addOne];
// const result = runCallbacks(callbacks, 1);
// console.log(result);



// const runCallbacks = function(callback, index) {
//     let result = index;
//     for (let i = 0; i < callback.length; i++) {
//         result = callback[i](result)
//     }
//     return result
// }
// const addOne = x => x + 1;
// const square = x => x * x;
// const callbacks = [addOne, square, addOne];
// const result = runCallbacks(callbacks, 1);
// console.log(result);
//----------------------------------------------------------------------------------------------------------
// (function(){
//     // return 10 + 20
//     // 'use strict'
//     // let f = function example(){
//     //     return 10 + 20;
//     // }
//     //
//     // console.log(f())
//     console.log(100)
//     var g = 'volvo'
//     let h = 100
//     function go (){
//         console.log('vova')
//     }
//     go()
//     console.log(h)
//     console.log(g)
// })
// ()

if(true){

   function f() {
        console.log('vire')
    }


    let g = 6
    var foo = 285;

}
f()
// console.log(g)
console.log(foo)


