//Task#1
const raid = [3, 8, 9, 5, 1]
const myLastIndexof = function (arr, number) {
    for (let i = raid.length; i >= 0; i = i - 1) {
        if (arr[i] === number) {
            return i
        }
    }
    return -1
}

const result1 = myLastIndexof(raid, 7)
console.log(result1)
//Task#2
const myIndexof = function (arr, number) {
    for (let i = 0; i < arr.length; i = i + 1) {
        if (arr[i] === number) {
            return i
        }
    }
    return -1
}

const result2 = myIndexof(raid, 7)
console.log(result2)
//Task#3
const myFind = function (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        const result = callback(arr[i])
        if (result) {
            return arr[i]
        }
    }
    return -1
}

const result3 = myFind(raid, (elem) => elem === 5)
console.log(result3)
//Task#4
const myFindIndex = function (arr, callback, index) {
    for (let i = 0; i < arr.length; i++) {

        if (callback(arr[i], index, arr)) {
            return i
        }
    }
    return -1
}

const result4 = myFindIndex(raid, function (item, id) {
    if (item === id) {
        return true
    }
}, 1)
console.log(result4)
//Task#5
const mySome = function (arr, callback, index) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], index, arr)) {
            return true
        }
    }
    return false
}

const result5 = mySome(raid, function (item, id) {
    if (item % 2 === id) {
        return true
    }
}, 1)
console.log(result5)
//Task#6
const myEvery = function (arr, callback, index) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], index, arr)) {
            return true
        }
    }
    return false
}

const cb = function (item, id) {
    if (item < id) {
        return true
    }
}
const result6 = myEvery(raid, cb, 1)
console.log(result6)
//Task#7
const myIncludes = function (arr, callback, number, idx) {
    for (let i = idx; i < arr.length; i++) {
        if (callback(arr[i], number, arr)) {
            return true
        }
    }
    return false
}

const back = function (item, id) {
    if (item === id) {
        return true
    }
}
const result7 = myIncludes(raid, back, 3, 1)
console.log(result7)

