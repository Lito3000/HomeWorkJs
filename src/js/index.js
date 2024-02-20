// // 'use strict'
// let foo = 50
// function ex(){
//     let foo = 101
//     function ex1(){
//         let foo = 102
//         console.log(foo)//window
//     }
//     ex1()
// }
// ex()
//
// let a = 10
// console.log(a)
//
// var h = 30
// console.log(h)
//
// window.n = 40
// console.log( window.n)
//
console.log(typeof this)//window
// if (true) {
//
//     console.log(this)//window
// }
// let g = function () {
//
//     if (true) {
//         console.log(typeof this)
//
//         return  this  //window//undefinde
//     }
// }
// console.log(g())
// let f = g()
// console.log(f)
//
// function expration() {
//     if (true) {
//
//         return  this  //window так как OuterEnviromentRecord у нас window
//     }
// }
// let f1 = expration()
// console.log(f1)
// let sumJob = {
//     name: 'mars',
//     year: '1986'
// }
//
// function example(a, b) {
//     console.log(this, a + b)//Object так как вызывается с объекта
// }//Object так как OuterEnviromentRecord у нас Object
//
// example.call(sumJob, 10, 20)

let obj = {
    clean: 'hand',
    action: 'alcohol',
    sanitizing: function () {
        console.log(typeof this)
        return this
    }
}
console.log(obj.sanitizing().sanitizing())

// const obj3 = {
//   name: 'Alex',
//   age: '23',
//   next: {
//     name: 'Hocking',
//     age: 33,
//     next: {
//       name: 'Ralf',
//       age: 50,
//       next: {}
//     }
//
//   }
// }
//
// const interLinkedList = function (data) {
//     // if (typeof data.name === 'undefined') {
//         if (!data.name) {
//             return null
//         } else {
//             console.log(data.name)
//             return interLinkedList(data.next)
//             // // console.log(typeof data.name)
//             // // console.log(typeof 'u')
//             // console.log(typeof undefined)
//             // // console.log('undefined')
//             // console.log(!undefined)
//             // console.log(!data.name)
//             // console.log(Boolean (undefined))
//             // console.log(String (undefined))
//             // console.log(Number (undefined))
//         }
//
//     // }
// }
// let f =interLinkedList(obj3)
//
// console.log(f)