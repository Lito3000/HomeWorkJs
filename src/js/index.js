// Task#1
console.log(a); // хоститься инициализация без значения
var a = 10;// все переменные которые инициализованы без значения несут в себе undefined
// Task#2
myFunction();// function declaration доступна через window ,можем вызывать перед тем как она была инициализована

function myFunction() { // во время компиляци функция function declaration перенесется вверх (хостится) и ошибки не будет
  console.log('Hello, world!');
}
// Task#3
console.log(b);// let и const хостятся в temporal dead zone // b объявлена только мы не имеем к ней доступа,будет ошибка Uncaught ReferenceError
// все переменные которые инициализованы без значения несут в себе undefined
let b = 5;
// Task#4

const myArrowFunction = () => { // Здесь хостится только инициализация const myArrowFunction захостится undefined,а сама функция не создается
                                      // пока мы ее не вызовем
  console.log('Hello from arrow function');// когда компилятор дойдет до выполнения функции только тогда эта функция создастся,поэтому
                                         // у нас нету не явной работы
};

myArrowFunction();
