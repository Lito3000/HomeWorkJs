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

// const numberSum = prompt('Введите целое число');
//
//
// let positivNumber = null
// let lengthString = null
//
// if (numberSum < 0 ){
//     positivNumber = 'Число' + ' ' + numberSum + ' ' + 'однозначне негативне';
// }else if(numberSum > 0){
//     positivNumber = 'Число' + ' ' + numberSum + ' ' + 'однозначне позитивне';
// } else {
//     positivNumber = 'Шкода що вы не захотiли ввести число'
// }
//
// if (isNaN( +numberSum ) ){
//     lengthString =  'Шкода що вы не захотiли ввести число'
// } else if(numberSum !== null){
//     lengthString =  'Кiлькiсть цифр' + ' ' + `${numberSum.length}`
// }else {
//     lengthString =  'Шкода що вы не захотiли ввести число'
// }
//
//
// alert(
//     `${positivNumber}`  + '\n' + `${lengthString}`
// );


// Task#4

let sum1 = Number(prompt('Введите целое число'));
let sum2 = Number(prompt('Введите целое число'));
let sum3 = Number(prompt('Введите целое число'));

let result = null;


if ((sum1 > sum2) && (sum1 > sum3)) {
    result = sum1
} else if ((sum2 > sum1) && (sum2 > sum3)) {
    result = sum2
} else if ((sum3 > sum1) && (sum3 > sum2)) {
    result = sum3
}

alert(result)

//Task#5
