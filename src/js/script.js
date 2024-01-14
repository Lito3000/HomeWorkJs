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
let g = true
const number = 3;
for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        g = false
    }
}
    console.log(g)

function isPow (num) {
    for (var i = 2; i < num; i++){
        if (num % i === 0) return false;
    }
    return num >= 2;
}
console.log(isPow(3))

// Task#5

const numb = Number(prompt('Введiть число'))
let sum = numb;
while (sum % 3 === 0) {
    sum = sum / 3;
}
console.log((sum === 1)? "Число можно получить " : "Число нельзя получить");
