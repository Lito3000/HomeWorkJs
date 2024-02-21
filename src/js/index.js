//Task#1
//
// const arr = ['professional', 'apply', 'strength', 'cleansing', 'moisturising', 'hand', 'cleanser', 'action', 'antimicrobial'];
//
// const x = (str) => {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].length > 5) {
//             str[i] = str[i]
//         } else {
//             str.splice(i, 1)
//         }
//     }
//     return str
// }
//
// const result = x(arr)
// console.log(result)

//Task#2

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

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);

console.log(sumWithInitial);
