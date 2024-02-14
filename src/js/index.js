//Task #1

function factorial(n) {

    if (n === 0) {

        return 1

    }else {

       return  n * factorial(n - 1)

    }
}

console.log(factorial(4))


const g = function (b){
    return b + b
}

console.log(4 * g(5+5),4 + g(5))