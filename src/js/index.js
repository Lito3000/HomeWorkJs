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

