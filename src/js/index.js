'use strict'
let product = {
    flour: 56,
    butter: 90,
    sugar: 50,
    eggs: 35,
    chocolate: 20
}
const clone = {}
for (let key in product) {
    clone[key] = product[key]
    clone[key] = clone[key] - (product[key] * 10) / 100;
}
console.log(product)
console.log(clone)
