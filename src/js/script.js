'use strict';

const creatFunction = function (sum, max) {

    for (let i = 0; i < max; i++) {

        sum.push(Math.round(Math.random() * 100));
    }
    return sum
}
const sum = [];
const result = creatFunction(sum, 100)
console.log(result)