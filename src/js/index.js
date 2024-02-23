'use strict'
//Task#1
let product = {
    flour: 56,
    butter: 90,
    sugar: 50,
    eggs: 35,
    chocolate: 20
}
const clone = {}
for (let key in product) {
    clone[key] = product[key]
    clone[key] = clone[key] - (product[key] * 10) / 100;
}
console.log(product)
console.log(clone)
//Task#2
let product2 = {
    flour: 56,
    butter: 90,
    sugar: 50,
    eggs: 35,
    chocolate: 20
}
const clone2 = {}
const x = () => {
    for (let key in product2) {
        clone2[key] = product2[key]
        clone2[key] = clone2[key] - (product2[key] * 10) / 100;
    }
    return clone2
}

const g = x()
console.log(g)

//Task#3

const student = {
    John: 45,
    Mark: 15,
    Milana: 36,
    Robert: 78,
    Kate: 98,
    Katrin: 95
}

const rating = {}
for (let key in student) {
    if(student[key] > 90){
        rating[key] = student[key] ;
    }

}
console.log(student)
console.log(rating)

//Task#4

const student3 = {
    John: 45,
    Mark: 15,
    Milana: 36,
    Robert: 78,
    Kate: 98,
    Katrin: 95
}

const rating3 = {}
const x3 = () => {
    for (let key in student3) {
        if (student3[key] > 90) {
            rating3[key] = student3[key];
        }
    }
    return rating3
}
const s = x3()
console.log(s)