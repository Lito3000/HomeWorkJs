'use strict';


let line = 0;
let sum = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {

    } else if (i % 2 !== 0) {
        line = line + i + ' ';
        sum = sum + i;
    }


}
console.log(line,sum)

