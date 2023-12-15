'use strict';
// Task#1
const num1 = +prompt('Enter your number1');
const num2 = +prompt('Enter your number2');
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

// Task#1-1
var n= Number(prompt('Введіть число:','0'));
var r= Number(prompt('Введіть число:','0'));

console.log(n + r);
console.log(n - r);
console.log(n * r);
console.log(n / r);


// Task#2
const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const divideBtn = document.getElementById('divide')
const multiplyBtn = document.getElementById('multiply')

let action = '-'

plusBtn.onclick = function (){
    action = '+'
}
minusBtn.onclick = function (){
    action = '-'
}
divideBtn.onclick = function (){
    action = '/'
}
multiplyBtn.onclick = function (){
    action = '*'
}

function printResult(result){
    if (result < 0){
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computeNumbersWithAction(inp1,inp2,actionSymbol){
    const num1 = +inp1.value
    const num2 = +inp2.value

    if        (actionSymbol === '+'){
        return num1 + num2
    } else if (actionSymbol === '-'){
        return num1 - num2
    } else if (actionSymbol === '/'){
        return num1 / num2
    } else if (actionSymbol === '*'){
        return num1 * num2
    }
    console.log(typeof num1,num2)
}

submitBtn.onclick = function () {
    const result = computeNumbersWithAction(input1,input2,action)
    printResult(result)

}









