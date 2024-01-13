'use strict';


function padString(str, numb) {
    if (typeof str !==  'string') {
        return console.log('помилка строки')
    } else if (isNaN(numb)) {
        return console.log('помилка числа')
    } else {
        let star = ''
        let g = str.length
        let k = ''
        for (let i = 0; i < numb; i++) {
            star = star + '*'
            k = star.substring(g)
        }
        console.log(str + k)
    }
}
padString('привіт', 8)