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