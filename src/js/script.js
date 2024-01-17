'use strict';

const creatFunction = function (max) {

    for (let i = 0; i < max; i++) {

        sum1.push(Math.round(Math.random() * 100));
    }
}
let sum1 = []
creatFunction(100)
console.log(sum1)