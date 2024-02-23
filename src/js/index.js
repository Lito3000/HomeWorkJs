'use strict'
//Task#1
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
//Task#2
let product2 = {
    flour: 56,
    butter: 90,
    sugar: 50,
    eggs: 35,
    chocolate: 20
}
const clone2 = {}
const x = () => {
    for (let key in product2) {
        clone2[key] = product2[key]
        clone2[key] = clone2[key] - (product2[key] * 10) / 100;
    }
    return clone2
}

const g = x()
console.log(g)

//Task#3

