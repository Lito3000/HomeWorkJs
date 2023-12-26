'use strict';

// Task#1

const student = {
    name: 'Yulchik',
    age: 30,
    grade: 100
}
student.grade = 50;
student.course = 1;

console.log(student)

// Task#2

const book = {
    title: 'LiteWorld',
    autor: 'IsabelVaine',
    year: 1997
}

book.publisher = {
    name: 'Kate',
    location: 'South Africa'
}

console.log(book)

// Task#3

const movie = {
    title: 'winter',
    director: 'Robin',
    year: 2005,
    genre: 'adventures'
}

for (let property in movie)

console.log("movie", ' ' +  property + " = " + movie[property])

//Task#3

let person1 = { name: "John" };// Две переменных ссылаются на два объекта с одинаковыми свойствами
let person2 = { name: "Aline" };


console.log(person1 == person2); // вернёт false
console.log(person1 === person2); // вернёт false


let person3 = { name: "Robin" };
var people = person3; // присвоим переменной people ссылку на объект person3

// теперь people и person3 ссылаются на один и тот же объект
console.log(person3 == people);// вернёт true
console.log(person3 === people);// вернёт true

people.name = "Kristin";
console.log(people); // вернёт { name: "Kristin" } вместо { name: "Robin" }

//Task#4


let animals = [
    { name: 'Vasya', type: 'Cat', age: 4},
    { name: 'Murka', type: 'Cat', age: 1.5 },
    { name: 'Varna', type: 'Turtle', age: 21 },
    { name: 'Kesha', type: 'Parrot', age: 3 },
    { name: 'Nayda', type: 'Dog', age: 2.5 },
    { name: 'Pufic', type: 'Humster', age: 2.5 },
    { name: 'Randy', type: 'dog', age: 12 },
];

animals.push({name: 'Kiti',type: 'Elephant' , age: 3});
animals.forEach( animal => {
    console.log(animal["name"],animal["type"],animal["age"])
});
