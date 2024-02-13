
//Task#1 Сумма элементов массива
const elem = [8,7,0,3,5,1]

const myReduce = function (fn,acc) {
    for (let i = 0; i < elem.length; i++) {
        acc = fn(acc, elem[i], i, elem);
    }
    return acc
};

const sumFunction = myReduce(function (total, number, index) {
    console.log(`Index: ${index} Total: ${total} Number: ${number} Array: ${elem}`)
    return total + number
}, 0)

console.log(sumFunction)

