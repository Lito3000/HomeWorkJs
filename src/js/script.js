'use strict';

const sum = null;
const creatFunction = function (sum, max) {

    for (let i = 0; i < max; i++) {

        sum = sum + (Math.round(Math.random() * 100)) + ' ';
    }
    return sum
}

const result = creatFunction(sum, 100)
console.log(result)