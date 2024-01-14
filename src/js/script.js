'use strict';


function padString(str, numb) {
    if (typeof str !==  'string')
        return console.log('помилка строки')
    if (typeof year2 !== 'number')
        return console.log('помилка числа')

        let star = ''
        let lengthStr = str.length
        let answerStar = ''
        for (let i = 0; i < numb; i++) {
            star = star + '*'
            answerStar = star.substring(lengthStr)
        }
        console.log(str + answerStar)

}
padString('привіт', 8)

// var year = prompt('Write a number');
// if (year.replace(/\s/g, '').length === 0 || isNaN(year)) {
//     alert('Нужно писать число!');
// } else {
//     alert('Вы полностью правы!');
// }
//
var year2 = 5;
// console.log(year2)
// console.log(typeof year2)
// console.log(Boolean(' '))
