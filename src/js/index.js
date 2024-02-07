//Task#1 Нахождение суммы чисел
const array = [5, 3, 7, 9, 12];

const sum1 = array.reduce(function (total, number, index, array) {
    console.log(`Index: ${index} Total: ${total} Number: ${number} Array: ${array}`)
    return total + number
}, 0)

console.log(sum1)

//Task#2 Нахождение общей цены товара
const items = [
    {name: 'Rice', price: 5},
    {name: 'Book', price: 20},
    {name: 'Chicken', price: 10},
    {name: 'Monitor', price: 100}
]

const totalPrice = items.reduce(function (total, item, index, array) {
    console.log(`Index: ${index} Total: ${total} ItemPrice: ${item.price} ItemName: ${item.name}  Array: ${array}`)
    return total + item.price
}, 0)

console.log(totalPrice)

//Task#3 Сортировка по одинаковым годам

const people = [
    {name: 'Kyle', age: 26},
    {name: 'John', age: 31},
    {name: 'Sally', age: 42},
    {name: 'Jill', age: 42}
]

const result = people.reduce(function (groupedPeople, person) {
    const age = person.age
    if (groupedPeople[age] == null) {
        groupedPeople[age] = []
    }
    groupedPeople[age].push(person)

    return groupedPeople
}, {})

console.log(result)

//Task#4 Сумма чисел

const num = [3, 4, 5, 1]

let total = null
for (let i = 0; i < num.length; i++) {
    total = total + num[i]
}
console.log(total)

const head = num.reduce(function (total, number, index, array) {
    console.log(`Index: ${index} Total: ${total} Number: ${number} Array: ${array}`)
    return total + number
}, 0)
console.log(head)
//Task#5 Нахождение максимального числа в масиве

const elem = [3, 5, 4, 5, 44]

let max = elem[0]
for (let i = 0; i < elem.length; i++) {
    if (elem[i] > max) {
        max = elem[i];
    }
}
console.log(max)

const maxNumber = elem.reduce(function (total, number, index, array) {
    if (total < number) {
        return number;
    } else {
        return total
    }
}, 0)

console.log(maxNumber)
//Task#6 Нахождение индекса максимального числа в масиве

let maximum = elem[0]
let index = 0
for (let i = 0; i < elem.length; i++) {
    if (elem[i] > maximum) {
        maximum = elem[i];
        index = i
    }
}
console.log(index)


const maxNumberReduce = elem.reduce((total, number, index, array) => {
    if (number > total[1]) {
        return [index, number]
    } else {
        return total;
    }
}, [0, elem[0]]);
console.log(maxNumberReduce)


//Task#6 Сортировка свойств объекта по годам

const cars = [
    {
        id: 123,
        name: 'Mustang',
        year: 1966,
    },
    {
        id: 124,
        name: 'Ferrari',
        year: 1998,
    },
    {
        id: 125,
        name: 'Mercedes',
        year: 1953,
    }
];

const carsIds = cars.reduce(function (acc, car, index, array) {
    if (car.year > 1960) {
        acc.push(car.id)
    }
    return acc
}, [])

console.log(carsIds)

const carsIds1 = []
for (let i = 0; i < cars.length; i++) {
    if (cars[i].year > 1960) {
        carsIds1.push(cars[i].id)
    }
}
console.log(carsIds1)

//Task#7 Вывести стоимость всех товаров

const products = [
    {title: 'phone', price: 100},
    {title: 'laptop', price: 2500},
    {title: 'Tv', price: 500},
    {title: 'Desktop', price: 1500}
];

const totalPrice1 = products.reduce(function (acc, product, i, arr) {
    return acc + product.price
}, 0)

console.log(totalPrice1);
Array.prototype.myReduce = function (fn, acc) {
    for (let i = 0; i < this.length; i++) {
        acc = fn(acc, this[i], i, this);
    }
    return acc
};

const myTotalPrice = products.myReduce(function (acc, product, i, arr) {
    return acc + product.price;
}, 0)
console.log(myTotalPrice)


const maxNumberReduce1 = elem.myReduce(function (total, number, index, array) {
    if (number > total[1]) {
        return [index, number,array]
    } else {
        return total;
    }
}, [0, elem[0],array]);
console.log(maxNumberReduce1)