'use strict'

let product = {
    flour: 56,
    butter: 90,
    sugar: 50,
    eggs: 35,
    chocolate: 20
}
let k = 10

function example(a) {
    const values = Object.entries(this)
    let val = ''
    for (let [key, val] of values) {
        val -= (val * a) / 100;
        console.log(val)
    }
    return val
}

example.call(product, k)
console.log(product)
