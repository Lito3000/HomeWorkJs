'use strict';


let sum = null
outerLoop: for (let i = 1; i <= 20; i++) {
    if ( i === 12) {
        break outerLoop ;
    } else  if (i % 2 === 0)continue;{
        sum = sum + i;
        console.log(i)
    }
}
console.log(sum)
