'use strict';

let a = 3;
let b = 3;

a === 0 ? console.log('Правильно'): console.log('Неверно');
a > 0 ? console.log('Правильно'): console.log('Неверно');
a < 0 ? console.log('Правильно'): console.log('Неверно');
a >= 0 ? console.log('Правильно'): console.log('Неверно');
a <= 0 ? console.log('Правильно'): console.log('Неверно');
a !== 0 ? console.log('Правильно'): console.log('Неверно');
a === 'test' ? console.log('Правильно'): console.log('Неверно');
a === 1 ? console.log('Правильно'): console.log('Неверно');
a > 0 && a < 5 ? console.log('Правильно'): console.log('Неверно');
a === 0 || a === 2 ? console.log(a + 7): console.log(a / 10);
a === 1 || a < 1 && b >= 3 ? console.log(a + b): console.log(a - b);
a > 2 && a < 11 || b >= 6 && b < 14 ? console.log('Верно'): console.log('Неверно');



const num = Number(prompt('input number or string'));


switch (num){
    case 1:
        console.log('Зима');
        break;
    case 2:
        console.log('Весна');
        break;
    case 3:
        console.log('Лiто');
        break;
    case 4:
        console.log('Осiнь')
}