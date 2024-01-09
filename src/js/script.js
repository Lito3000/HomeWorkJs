'use strict';

const  elem = Number(prompt('Введите число'))
const smallestDivisor = (num) => {
    if (num && num !== 1) {
        const iter = (num, acc) => {

            if (num % acc === 0) return acc

            return iter(num, acc + 1)
        }

        return iter(num, 2)
    } else {
        return  NaN
    }

}

let h = smallestDivisor(elem)

console.log(h)