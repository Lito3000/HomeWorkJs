//Task#1-1
(function () {
    'use strict'
    const resultProduct = {}
    const product = {
        flour: 56,
        butter: 90,
        sugar: 50,
        eggs: 35,
        chocolate: 20,
        getFullName() {
            const sum = () => {
                for (let key in product) {
                    resultProduct[key] = this[key] - (this[key] * 10) / 100
                }
            }
            sum()
            return resultProduct
        }
    }
    const res = product.getFullName()
    console.log(res)
    console.log(product)
//Task#1-2
    const prod = {
        flour: 56,
        butter: 90,
        sugar: 50,
        eggs: 35,
        chocolate: 20,
    }
    const example = (elem) => {
        for (let key in elem) {
            elem[key] = elem[key] - (elem[key] * 10 / 100)
        }
        return elem
    }
    console.log(prod)
    const prodResult = example(prod)
    console.log(prodResult)


// Task#2-1
    const rating = {}
    const student = {
        John: 45,
        Mark: 15,
        Milana: 36,
        Robert: 78,
        Kate: 98,
        Katrin: 95,
        sortRating() {
            const x3 = () => {
                for (let key in student) {
                    if (student[key] > 90) {
                        rating[key] = student[key];
                    }
                }
            }
            x3()
            return rating
        }
    }
    const result = student.sortRating()
    console.log(result)
    console.log(student)

    //Task#2-2
    const stud = {
        John: 45,
        Mark: 15,
        Milana: 36,
        Robert: 78,
        Kate: 98,
        Katrin: 95,
    }
    const arr = {}
    const studFun = (elem) => {
        for (let key in elem) {
            if (elem[key] > 90) {
                arr[key] = elem[key]
            }
        }
        return arr
    }
    const out = studFun(stud)
    console.log(out)
})()

//Task#2-3
function example() {

    const rating = {}
    const student = {
        John: 45,
        Mark: 15,
        Milana: 36,
        Robert: 78,
        Kate: 98,
        Katrin: 95,
        sortRating() {
            const x3 = () => {
                for (let key in student) {
                    if (student[key] > 90) {
                        rating[key] = student[key];
                    }
                }
            }
            x3()
            return rating
        }
    }
    return student.sortRating()
}
const result3 = example()
console.log(result3)