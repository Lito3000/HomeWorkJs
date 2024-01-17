'use strict';

const creatFunction = function (max) {
    for (let i = 0; i < max; i++) {
        sum.push(Math.round(Math.random() * 100));
    }
}
const sum = []
creatFunction(100)
console.log(sum)