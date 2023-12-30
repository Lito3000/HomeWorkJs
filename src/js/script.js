'use strict';

// Task#1-1
let getNum1 = Number(prompt('Введите число'));
let getNum2 = Number(prompt('Введите число'));
//
function task(a, b) {

    let arrOperators = ['*', '-', '+', '/'];

    let resultList = '';

    for (let i = 0; i < arrOperators.length; i++) {
        document.write(a + arrOperators[i] + b + '=' + eval(a + arrOperators[i] + b) + "<br>");
        resultList += (a + arrOperators[i] + b + '=' + eval(a + arrOperators[i] + b)) + '\n';
    }
    return resultList;
}

let elem = task(getNum1, getNum2)
console.log(elem)
alert(elem);

// Task#1-2

    alert(getNum1 + "*" + getNum2 + "=" +(getNum1*getNum2)
        + '\n' + getNum1 + "/" + getNum2 + "=" +(getNum1/getNum2)
        + '\n' +getNum1 + "*" + getNum2 + "=" +(getNum1*getNum2)
        + '\n' +getNum1 + "-" + getNum2 + "=" +(getNum1-getNum2));

// Task#1-3

function task2(a, b) {

    let arrOperators = ['*', '-', '+', '/'];

    let resultList = '';

    for (let i = 0; i < arrOperators.length; i++) {
        let g = arrOperators[i]
        if (g === '+') {
            document.write(a + g + b + '=' + (a - b) + "<br>");
            resultList += (a + g + b + '=' + (a + b)) + '\n';
        } else if (g === '-') {
            document.write(a + g + b + '=' + (a + b) + "<br>");
            resultList += (a + g + b + '=' + (a - b)) + '\n';
        } else if (g === '*') {
            document.write(a + g + b + '=' + (a * b) + "<br>");
            resultList += (a + g + b + '=' + (a * b)) + '\n';
        } else if (g === '/') {
            document.write(a + g + b + '=' + (a / b) + "<br>");
            resultList += (a + g + b + '=' + (a / b)) + '\n';
        }
    }
    return resultList;
}

let elem2 = task2(getNum1, getNum2)
console.log(elem2)
alert(elem2);


// Task#2

let mode1 = Number(prompt('Введите часы'));
let mode2 = Number(prompt('Введите минуты'));
function time(a, b) {
    let output;
    output = (a * 3600) + (b * 60);
    return output;
}

let data = time(mode1, mode2)
alert(data)

// Task#3 Калькулятор

let action = (prompt('Что ты хочешь сделать? + - / *'));
let val1 = Number(prompt('Введите число'))
let val2 = Number(prompt('Введите число'))

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

let multi = calc(action, val1, val2)
console.log(multi)



//Task#4-1 Среднее значение

let num1 = Number(prompt('число 1'));
let num2 = Number(prompt('число 2'));
let num3 = Number(prompt('число 3'));

let arr = [num1, num2, num3];
let sum = 0;
let count = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    count = count + 1;
}
let res = sum / count;
console.log(res);

// Task#4-2

function average(nums) {
    return nums.reduce((a, b) => (a + b)) / nums.length;
}

let result = average(arr)
console.log(result)

// Task#4-3

function averageScores({avg, n}, slangTermInfo) {
    return {
        avg: (slangTermInfo + n * avg) / (n + 1),
        n: n + 1,
    };
}
const initialVars       = {avg: 0, n: 0};
const averagePopularity = arr.reduce(averageScores, initialVars).avg;
console.log(averagePopularity);
