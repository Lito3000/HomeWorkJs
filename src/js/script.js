'use strict';


function padString(str, numb) {
    if (typeof str !==  'string')
        return console.log('помилка строки')
    if (isNaN(numb))
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