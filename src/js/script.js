// Task#1
const list1 = document.querySelector('#list');
const list2 = document.querySelector('#even');
const list3 = document.querySelector('#num');

const n= String(prompt('Введіть строку:'));
const r= String(prompt('Введіть строку:'));
const j= String(prompt('Введіть строку:'));

console.log(n + r + j);

list1.innerHTML = (n + r + j);


// Task#2

let num = 1 + ' ' + 2 + ' ' + 3 + ' ' + 4 + ' ' + 5;
console.log(num);
list2.innerHTML = (num);


//Task#2-1

let even = [1,2,3,4,5];
let sum = '';
for (let i = 0; i < even.length; i++) {
    sum = sum + even[i] + ' ';
}
list3.innerHTML = (sum);
console.log(sum);



