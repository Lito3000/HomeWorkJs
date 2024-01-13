'use strict';


const elem2 = Number(prompt('Введите число'))
if (elem2 <= 1) {
    console.log(NaN)
} else {
    for (let i = 2; i < elem2; i++) {
        if (elem2 % i === 0) {
            console.log(i)
            break
        }
    }
}