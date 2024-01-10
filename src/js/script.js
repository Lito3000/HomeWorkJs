'use strict';


const  userInput = prompt('Введте число')

let num = null;
if (typeof userInput === 'string'){
    num = parseInt(userInput)
}else {
    console.log('null',userInput)
}


let arr = [2,3,4]
let outPut = null;

if (num === 1){
    outPut = `${num}` + ' ' + 'год'
}else if (arr.includes(num)){
    outPut = `${num}` + ' ' + 'годa'
}else {
    outPut = `${num}` + ' ' + 'лет'
}

alert(outPut)

const userInput = prompt('Введіть число');


let num = parseInt(userInput, 10);
let outPut;


if (isNaN(num)) {
    alert('Будь ласка, введіть коректне число');
} else if (num % 100 >= 11 && num % 100 <= 14) {
    outPut = `${num} років`;
} else if (num % 10 === 1) {
    outPut = `${num} рік`;
} else if (num % 10 >= 2 && num % 10 <= 4) {
    outPut = `${num} роки`;
} else {
    outPut = `${num} років`;
}


if (outPut) {
    alert(outPut);
}
