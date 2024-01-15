'use strict';


function padString(str, numb, symbol, right = true) {
    if (typeof str !== 'string') return console.log('помилка строки');
    if (typeof numb !== "number" || isNaN(numb)) return console.log('помилка числа');
    if (str.length === numb) return str;
    if (str.length > numb) return str.substring(0, numb);
    if (typeof symbol !== 'string' || symbol.length !== 1) return console.log('Symbol length -1');
    if (typeof right !== 'boolean') return console.log('Right should be Boolean');

    let star = '';
    let lengthStr = str.length;
    let answerStar = '';
    for (let i = 0; i < numb; i++) {
        star = star + symbol
        answerStar = star.substring(lengthStr)
    }
    return right ? str + answerStar : answerStar + str;
}

padString('привіт', 8, '*')
padString('привіт', 8, '*', false)
padString('привіт', 2, '*')




