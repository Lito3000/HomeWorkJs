function factorial4(num, degree) {
    if (degree === 0) {
        return 1
    } else {
        return num * factorial3(num, degree - 1)
    }
}

function factorial3(num,degree) {
    if (degree === 0) {
        return 1
    } else {
        return num * factorial2(num, degree - 1)
    }
}

function factorial2(num,degree) {
    if (degree === 0) {
        return 1
    } else {
        return num * factorial1(num, degree - 1)
    }
}

function factorial1(num,degree) {
    if (degree === 0) {
        return 1
    } else {
        return num * factorial0(num, degree - 1)
    }
}

function factorial0(num,degree) {
    if (degree === 0) {
        return 1
    } else {
        return num * factorial4(num, degree - 1)
    }
}

//pow(num, degree)
console.log(factorial4(2, 12))


// function g(5+7){
// g(6)
// }
//
// console.log( g(5+5))
// console.log(4 + g(5))
// console.log(4 + undefined)