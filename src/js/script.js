'use strict';

const  elem = Number(prompt('Введите число'))
const smallestDivisor = (num) => {

    const iter = (num, acc) => {

        if (num % acc === 0) return acc

        return iter(num, acc + 1)
    }

    return iter(num, 2)
}

let h = smallestDivisor(elem)

console.log(h)