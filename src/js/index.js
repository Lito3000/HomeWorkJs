//Task#1
// const array = [5, 3, 7, 9, 12];
//
// const sum = array.reduce(function (total, number, index, array) {
//     console.log(`Index: ${index} Total: ${total} Number: ${number} Array: ${array}`)
//     return total + number
// }, 0)
//
// console.log(sum)
//
// //Task#2
// const items = [
//     {name:'Rice',price:5},
//     {name: 'Book',price:20},
//     {name: 'Chicken',price: 10},
//     {name: 'Monitor',price: 100}
// ]
//
// const totalPrice = items.reduce(function (total,item,index,array){
//     console.log(`Index: ${index} Total: ${total} ItemPrice: ${item.price} ItemName: ${item.name}  Array: ${array}`)
// return total + item.price
// },0)
//
// console.log(totalPrice)

//Task#3

const people = [
    {name:'Kyle',age:26},
    {name: 'John',age: 31},
    {name: 'Sally',age: 42},
    {name: 'Jill',age: 42}
]

const result = people.reduce(function (groupedPeople,person){
    const age = person.age
    if (groupedPeople[age] == null){
        groupedPeople[age] = []
        }
        groupedPeople[age].push(person)

    return groupedPeople
},{})

console.log(result)