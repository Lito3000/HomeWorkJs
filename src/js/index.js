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
//   // if (typeof data.name === 'undefined') {
//   if (!data.name) {
//     return null
//   } else {
//
//     // // console.log(typeof data.name)
//     // // console.log(typeof 'u')
//     // console.log(typeof undefined)
//     // // console.log('undefined')
//     // console.log(!undefined)
//     // console.log(!data.name)
//     // console.log(Boolean (undefined))
//     // console.log(String (undefined))
//     // console.log(Number (undefined))
//   }
//   console.log(data.name)
//   interLinkedList(data.next)
// }
//
// const j = interLinkedList(obj3)
// console.log(j)

function factorial(n) {
 if (n===4){
   return  5
 }
        return n * factorial(n)

    //factorial (4) = 4 * factorial(3);
    //factorial (3) = 3 * factorial(2);
    //factorial (2) = 2 * factorial(1);
    //factorial (1) = 1 * factorial(0);

    //factorial(0) = 1;
    //factorial(1) = 1 * 1 = 1;
    //factorial(1) = 1 * 2 = 2;
    //factorial(1) = 3 * 2 = 6;
    //factorial(1) = 4 * 6 = 24;
}
console.log(factorial(4))