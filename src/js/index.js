//Task#1
function getFactorial(n){
    if (n === 0) {
        return 1
    }else {
        return n * getFactorial(n - 1)
    }
}
console.log(getFactorial(4))

//Task#2
function pow(num, degree) {
    if (degree === 0) {
        return 1
    } else {
        return num * pow(num, degree - 1)
    }
}

console.log(pow(2, 12))

//Task#3

function elem(num1, num2) {
    if (num1 === 0) {
        return num2
    } else {
        return elem(num1 - 1, ++num2)
    }
}

const g = elem(56, 12)
console.log(g)
