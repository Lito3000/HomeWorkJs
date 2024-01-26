// const createUser = function obj(a, b) {
//   const user = {
//     name: a,
//     age: b,
//   };
//   user.greet = greet;
//   user.ageUser = years;
//   return user;
// };
//
// const greet = function greet() {
//   console.log(`Hello, my name is ${this.name}`);
// };
//
// const years = function years() {
//   console.log(`My age is ${this.age}`);
// };
//
// const user1 = createUser('Alice', 25);
// const user2 = createUser('Bob', 30);
// user1.greet();
// user2.greet();
// user1.ageUser();
// const g = user1.age;
// console.log(g);

// function fib(n) {
//   if (n <= 0) {
//     return 0;
//   }
//   if (n <= 2) {
//     return 1;
//   }
//   const l = fib(n - 1);
//   console.log(l);
//   const k = fib(n - 2);
//   console.log(k);
//   const y = fib(n - 1) + fib(n - 2);
//   console.log(y);
//   return fib(n - 1) + fib(n - 2);
// }
// const g = fib(3);
// console.log(g);

function nachi(num) {
  // console.log('f', num);
  if (num < 2) {
    return num;
  }

  // const l = nachi(num - 1);
  // console.log('num', num);
  // console.log('l', l);
  // const k = nachi(num - 2);
  // console.log('k', k);
  // const y = nachi(num - 1) + nachi(num - 2);
  // console.log('y', y);
  return nachi(num - 1) + nachi(num - 2);
}

console.log('result', nachi(5));

// function countdown(i) {
//   console.log(i);
//   if (i <= 3) {
//     return;
//   }
//   countdown(i - 1);
//   console.log(i);
// }
// countdown(5);
