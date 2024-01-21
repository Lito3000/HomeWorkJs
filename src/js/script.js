'use strict';

const sum = []
const creatRandomNum = function () {
    const randomNumber = Math.floor(Math.random() * 100)
    if (!sum.includes(randomNumber)) {
        sum.push(randomNumber)
        return randomNumber
    }
    return creatRandomNum()
}

for (let i = 0; i <= 99; i = i + 1) {
    creatRandomNum()
}
console.log(sum)