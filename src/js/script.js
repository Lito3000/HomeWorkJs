'use strict';


const  num = prompt('Введте число')

let outPut = null

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
