'use strict';
// Task#1
let x = 1;
let y = 7;

x > y ? alert('x більше за y'):alert('x не більше, ніж y')

// Task2#
const num = Number(prompt('Введите число'))

if (num){
      Number(prompt('Введите число2'))
}


// Task#3

const numberSum = prompt('Введите целое число');


let positivNumber = null
let lengthString = null

if (numberSum < 0 ){
    positivNumber = 'Число' + ' ' + numberSum + ' ' + 'однозначне негативне';
}else if(numberSum > 0){
    positivNumber = 'Число' + ' ' + numberSum + ' ' + 'однозначне позитивне';
} else {
    positivNumber = 'Шкода що вы не захотiли ввести число'
}

if (isNaN( +numberSum ) ){
    lengthString =  'Шкода що вы не захотiли ввести число'
} else if(numberSum !== null){
    lengthString =  'Кiлькiсть цифр' + ' ' + `${numberSum.length}`
}else {
    lengthString =  'Шкода що вы не захотiли ввести число'
}


alert(
    `${positivNumber}`  + '\n' + `${lengthString}`
);


// Task#4

const sum1 = Number(prompt('Введите целое число'));
const sum2 = Number(prompt('Введите целое число'));
const sum3 = Number(prompt('Введите целое число'));

let showInfo = null;


if ((sum1 > sum2) && (sum1 > sum3)) {
    showInfo = sum1
} else if ((sum2 > sum1) && (sum2 > sum3)) {
    showInfo = sum2
} else if ((sum3 > sum1) && (sum3 > sum2)) {
    showInfo = sum3
}

alert(`${showInfo}`)

// Task#5


const triangleA = Number(prompt('Введите целое число'));
const triangleB = Number(prompt('Введите целое число'));
const triangleC = Number(prompt('Введите целое число'));

let result = null;

if (
    ((triangleA + triangleB) > triangleC) &&
    ((triangleB + triangleC) > triangleA) &&
    ((triangleA + triangleC) > triangleB)
) {
    result = 'может';
}else {
    result = 'не может';
}

alert(`${result}`);