'use strict';

// Task#1
let num = null
for (let i = 20; i <= 30; i++){
    num = num + (i + 0.5) + ' '
}
console.log(num)

// Task#2
let dollar = [10,20,30,40,50,60,70,80,90,100]
let price = null
for (let i = 0;i < dollar.length;i++){

    price = price + (dollar[i] * 27) + ' '

}
console.log(price)

// Task#3
const n = Number(prompt('Введiть число'))

for (let i = 0; i < 100; i++) {
    if (Math.pow(i, 2) > n)continue;
    if (Math.pow(i, 2) < n) {
        console.log(i);
    }
}


// Task#4
const number = 10;
nextPrime:
for (let i = 2; i <= number; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) continue nextPrime;
    }
    console.log(i);
}

// Task#5

const numb = Number(prompt('Введiть число'))
let sum = numb;
while (sum % 3 === 0) {
    sum = sum / 3;
}
console.log((sum === 1)? "Число можно получить " : "Число нельзя получить");
