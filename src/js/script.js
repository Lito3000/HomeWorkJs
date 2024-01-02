'use strict';


// Task#9

const mode1 = Number(prompt('Введите часы'));
const mode2 = Number(prompt('Введите минуты'));
function time(a, b) {
    return (a * 3600) + (b * 60);
}

const data = time(mode1, mode2)
alert(data)