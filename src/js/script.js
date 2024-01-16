'use strict';

const creatFunction = function (sum, max) {

    for (let i = 0; i < max; i++) {

        sum.push(Math.round(Math.random() * 100));
    }
}
let sum = [];
creatFunction(sum, 100)
console.log(sum)