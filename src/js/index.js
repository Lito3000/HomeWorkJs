//Task#1

const arr = ['professional', 'apply', 'strength', 'cleansing', 'moisturising', 'hand', 'cleanser', 'action', 'antimicrobial'];

const x = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > 5) {
            str[i] = str[i]
        } else {
            str.splice(i, 1)
        }
    }
    return str
}

const result = x(arr)
console.log(result)

// //Task#2

const arrNumber = [3, 2, 5, 45, 34, 2, 34, 56, 32, 45, 2, 67, 98, 6, 34]

const numb = (elem) => {
    let sum = null
    for (let i = 0; i < elem.length; i++) {
        if (elem[i] % 2 === 0) {
            sum = sum + elem[i]
        }
    }
    return sum
}
const g = numb(arrNumber)
console.log(g)

//Task#3
const array1 = [3, 2, 5, 45, 34, 2, 34, 56, 32, 45, 2, 67, 98, 6, 34];

const sumWithInitial = array1.reduce((accumulator, currentValue) => {
        if( currentValue % 2 === 0){
            accumulator = accumulator + currentValue
        }

return accumulator
    },0);

console.log(sumWithInitial);

//Task#4
const array2 = [3, 2, 5, 45, 34, 2, 34, 56, 32, 45, 2, 67, 98, 6, 34];
const getAverage = (numbers) => {
    const sumWithInitial2 = numbers.reduce((accumulator, numbers) => {
        return accumulator + numbers
    }, 0);
    return sumWithInitial2 / numbers.length
}
const res = getAverage(array2);
console.log(res)