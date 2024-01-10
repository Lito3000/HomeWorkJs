'use strict';

// Task#1
let str = [];
for (let i = 10; i <= 20; i++) {
    str.push(i);
}
console.log(str.join());

// Task#2

let num = null
for (let i = 10; i <= 20; i++) {
    num = num + Math.pow(i, 2) + ' '
}
console.log(num)

// Task#3
for (let i = 1; i < 10; i++) {
    console.log('7 * ' + i + ' = ' + 7 * i);
}


// Task#4
let sum = null
for (let i = 1; i < 15; i++) {
    sum = sum + i;
}
console.log(sum)


// Task#5
let multi = 1;
for (let i = 15; i <= 35; i++) {
    multi = multi * i;
}
console.log(multi)

// Task#6
let count1 = null;
let avr = null;
for (let i = 1; i <= 500; i++) {
    avr = avr + i;
    count1 = count1 + 1;
}
let avg = avr / count1
console.log(count1, avr, avg);

// Task#7

let number = null;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        number = number + i + ' '

    }
}
console.log(number)

//Task#8
let result = null
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0){
        result = result + i + ' ';
    }
}
console.log(result)

// Task#9

let naturalNum = +prompt('Введите любое натуральное число');

let count = 0,
    summ = 0;
for (let i = 2; i * 2 <= naturalNum; i++) {
    if (naturalNum % i === 0) {
        document.write(`Делитель этого числа: ${i} <br /><br />`);
        if (i % 2 === 0) {
            count++;
            summ += i;
        }
    }
}

console.log(count)//количество четных делтелей
console.log(summ)//сумма его парных делителей

// Task#10

for (let i = 1; i <=9;i++){
    for(let j = 1;j<= 10;j++){
        console.log(i + '*' + j + '=' + (i*j))
    }
}