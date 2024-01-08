'use strict';
// Task#1
// let x = 1;
// let y = 7;
//
// let result = x > y ? console.log('x більше за y'):console.log('x не більше, ніж y')

// Task2#
// let num = Number(prompt('Введите число'))
//
// if (num){
//       Number(prompt('Введите число2'))
// }


// Task#3

const numberSum = prompt('Введите целое число');

let lengthString =  'Кiлькiсть цифр' + `${numberSum.length}`

let positivNumber = null

if (numberSum < 0 ){
    positivNumber = 'Число' + ' ' + numberSum + ' ' + 'однозначне негативне';
}else if(numberSum > 0){
    positivNumber = 'Число' + ' ' + numberSum + ' ' + 'однозначне позитивне';
}else if(numberSum){
    positivNumber = 'Шкода що вы не захотiли ввести число'
}

alert(
    `${positivNumber}`  + '\n' + `${numberSum}`
);

// document.write(`${age}`  + '</br>' + `${userCity}` + '</br>' + `${userSport}`);
console.log(positivNumber)

// Task#4
//
// let sum1 = prompt('Введите целое число');
// let sum2 = prompt('Введите целое число');
// let sum3 = prompt('Введите целое число');

