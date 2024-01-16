'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const creatFunction = function (elem,str) {

    for (let i = 0; i < elem; i++) {

        sum = sum + str[Math.round(Math.random() * (str.length - 1))];
    }
}
let sum = '';
creatFunction(16,characters)
console.log(sum)
