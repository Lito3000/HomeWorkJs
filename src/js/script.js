'use strict';


function padString(str, numb,symbol,right = true) {
    if (typeof str !==  'string') return console.log('помилка строки');
    if (typeof numb !== "number" || isNaN(numb)) return console.log('помилка числа');
    if(str.length === numb) return str;
    if(str.length > numb) return str.substring(0,numb)
    if(typeof symbol !== 'string' || symbol.length !== 1) return console.log('Symbol length -1')
    if(typeof right !== 'boolean' ) return console.log('Right should be Boolean')

        let star = ''
        let lengthStr = str.length
        let answerStar = ''
        for (let i = 0; i < numb; i++) {
            star = star + symbol
            answerStar = star.substring(lengthStr)
        }
        console.log(str + answerStar)
return right ? str + answerStar:answerStar +str
}

let f = padString('привіт', 8)
let u = padString('привіт', 8,'*',false)
let g = padString('привіт', 8,'*')

console.log(u,g,f)


// var year = prompt('Write a number');
// if (year.replace(/\s/g, '').length === 0 || isNaN(year)) {
//     alert('Нужно писать число!');
// } else {
//     alert('Вы полностью правы!');
// }
//
// var year2 = 5;
// console.log(year2)
// console.log(typeof year2)
// console.log(Boolean(5))
