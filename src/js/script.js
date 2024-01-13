'use strict';

const numb = Number(prompt('Введiть число'))
const math = Number(prompt('Введiть ступiнь'))

function primality(numb, math = 1) {
    if (isNaN(numb)) return false
    return numb ** math
}

let h = primality(numb, math)
alert(h)