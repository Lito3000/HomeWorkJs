function factorial4(n) {
    if (n === 0) {
        return 1
    } else {
        return n * factorial3(n - 1)
    }
}
function factorial3(n) {
    if (n === 0) {
        return 1
    } else {
        return n * factorial2(n - 1)
    }
}
function factorial2(n) {
    if (n === 0) {
        return 1
    } else {
        return n * factorial1(n - 1)
    }
}
function factorial1(n) {
    if (n === 0) {
        return 1
    } else {
        return n * factorial0(n - 1)
    }
}
function factorial0(n) {
    if (n === 0) {
        return 1
    }else {
        return n * factorial0(n - 1)
    }
}

console.log(factorial4(4))


// function g(5+7){
// g(6)
// }
//
// console.log( g(5+5))
// console.log(4 + g(5))
// console.log(4 + undefined)