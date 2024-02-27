//Task#1
(function () {
    'use strict'
    const product = {
        flour: 56,
        butter: 90,
        sugar: 50,
        eggs: 35,
        chocolate: 20,
        getFullName() {
            const sum = () => {
                for (let key in product) {
                    this[key] = this[key] - (this[key] * 10) / 100
                    delete product.getFullName;
                }
            }
            sum()
            return this
        }
    }
    const r = product.getFullName()
    console.log(r)

// Task#2
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
})()