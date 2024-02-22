'use strict'



//
//
//
// const prise = (a) => {
//     console.log(this.sugar)
// }
//
// const result = prise.bind(product,'num');
//
// result(10)
// prise(10)
// const elem = function (prefix) {
//     const values = Object.entries(this)
//     let val = ''
//     for (let [key, val] of values) {
//         val -= (val * prefix) / 100;
//         console.log(val)
//     }
//     return val
// }
//
//
// function myApply(func, context, argument) {
//     context.foo = func
//    return  context.foo(argument)
//     // delete context.foo;
//     // console.log('myAplay', context)
// }
//
// function myBind(func, context, argument) {
//     return function () {
//         myApply(func, context, argument)
//     }
// }
//
// const binded = myBind(elem, product, 10)
// console.log(binded)
// binded()


// const product = {
//     flour: 56,
//     butter: 90,
//     sugar:50,
//     eggs:35,
//     chocolate:20
// }
//
// const values = Object.entries(product)
//
//     for (const [key,val] of values){
//         console.log(`${key}:${val}`)
// }
//
// const j = productList(product)
// console.log(j)
// "use strict";
// var obj = {
//     i: 10,
//     b: () => console.log(this.i, this),
//     c: function () {
//         console.log(this.i);
//     },
// };
// obj.b(); // prints undefined, Window {...} (или глобальный объект)
// obj.c(); // prints 10, Object {...}
// -------------------------------------------------------------------------------------
let product = {
    flour: 56,
    butter: 90,
    sugar: 50,
    eggs: 35,
    chocolate: 20
}
let  k = 10
function example (a) {
    const values = Object.entries(this)
    let val = ''
    for (let [key, val] of values) {
        val -= (val * a) / 100;
        console.log(val)
    }
    return val
}
example.call(product,k)
console.log(product)
// ------------------------------------------------------------------------------

// function example  (a)  {
//     const values = Object.values(product)
//     let val = ''
//     for (let  val of values) {
//         val -= (val * a) / 100;
//         console.log(val)
//
//     }
//     return this
//
// }
//
// const param = example.bind(product)
//
// console.log(param(10))