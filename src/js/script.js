'use strict';

const action = (prompt('Что ты хочешь сделать? + - / *'));
const val1 = Number(prompt('Введите число'))
const val2 = Number(prompt('Введите число'))

function calc(action, val1, val2) {
    if (action === '+') {
        return val1 + val2
    } else if (action === '-') {
        return val1 - val2
    } else if (action === '/') {
        return val1 / val2
    } else if (action === '*') {
        return val1 * val2
    }
}

const multi = calc(action, val1, val2)
console.log(multi)