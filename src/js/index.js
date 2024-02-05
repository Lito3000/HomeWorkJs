// const arr= ['apple','banana','grapefruit','orange'];
//
// const forEac  = function (dat,callback){//она не чего не возращает
//   for(let i = 0;i<dat.length;i +=1){//мы по сути написали метод который существует в массивах
//     callback(dat[i],i,dat)//его добавили в javascript api до масивов
//   }
// }
//
// const log = function (elemen,index,arr){// вот колбэк функция
//   console.log(elemen)
// }
//
// const getLength = function (dat,index,arr){
//   console.log(dat.length)
// }
//
// const toUp = function (dat,index,arr){
//   console.log(dat.toUpperCase())
// }
//
// forEac(arr,log)
// forEac(arr,getLength)
// forEac(arr,toUp)
//
//
//--------------------------------------------------------------------------------------------------------
// const massiv = ['car','ship','aircraft']
//
// massiv.forEach(
//     function (item,index,array) {
//       console.log(`${item} ${index} ${array}`)
//     }
// )
//
// const y = [1,7,9,6]
//
// const u = y.push(5,8)
// console.log(y)
// //--------------------------------------------------------------------------------------------------------
//
// const call = ['cotton','pads','bumbac']
//
// const c = function  cb (ite,inde,arra) {
//   console.log(`${ite} ${inde} ${arra}`)
// }
//
// call.forEach(c)
//
// //------------------------------------------------------------------------------------------------------
// const bomb = ['spice','stick','deodorant']
//
// bomb.forEach(ite => console.log(ite))
//------------------------------------------------------------------------------------------------------
// String.prototype.replaceAt = function(index, replacement) {
//   return this.substring(0, index) + replacement + this.substring(index + replacement.length);
// }
//
//
// const hello1 = "Hello World";
// log(hello1.replaceAt(2, "!!")); // He!!o World
//-------------------------------------------------------------------------------------------------------
// const greet = function (seyHifunc){
//   seyHifunc('Hi!');
// }
//
// const  hello = function (str){
//   alert(str)
// }
//
// const hidenHello = function (str){
//   console.log(str)
// }
// //вызывается функция greet вместо аргумента hello подставляется аргумент seyHifunc('Hi!') вызывается функция
// // hello
// greet(hello)//вызывается функция greet вместо аргумента hello подставляется аргумент str  функции hidenHello
// greet(hidenHello)
//-------------------------------------------------------------------------------------------------------
//
//
// const arr = ['apple', 'banana', 'grapefruit', 'orange'];
//
// const forEach = function (data) {
//     for (let i = 0; i < data.length; i += 1) {
//         console.log(data[i])
//     }
// }
// forEach(arr)
//
// const getLength = function (data) {
//     for (let i = 0; i < data.length; i += 1) {
//         console.log(data[i].length)
//     }
// }
// getLength(arr)
//
// const uperCase = function (data) {
//     for (let i = 0; i < data.length; i += 1) {
//         console.log(data[i].toUpperCase())
//     }
// }
//
// uperCase(arr)
//-------------------------------------------------------------------------------------------------------
//
// const arr = ['apple', 'banana', 'grapefruit', 'orange'];
//
// const forEach = function (data,callback) {
//     for (let i = 0; i < data.length; i += 1) {
//         callback(data[i],i,data)//это вызов функции log
//     }                           //мы вызываем callback функцию log с этими аргументами (data[i],i,data)
// }
//
//
// const log = function (element,item){//передадим сюда data[i]  c callback функции
//     console.log(element,item)
// }
// //вызывается функция forEach вместо аргумента log подставляется аргумент callback(data[i],i,data) и
// // данные передаются в функцию log функция log дает ответ
// forEach(arr,log)//вызывается функция forEach вместо аргумента log подставляется аргумент element  функции log
//                 //аргумент(element) callback функции log передастся функции forEach
//--------------------------------------------------------------------------------------------------------
//
// const arr = ['apple', 'banana', 'grapefruit', 'orange'];
//
// const forEach = function (data,callback) {
//     for (let i = 0; i < data.length; i += 1) {
//         callback(data[i], i, data)//это вызов функции log
//     }
// }
//
// const log = function (element,item){//передадим сюда data[i]  c callback функции
//     console.log(element,item)
// }
// const getLength = function (data) {
//         console.log(data.length)
// }
//
//
// const uperCase = function (data) {
//         console.log(data.toUpperCase())
// }
//
// forEach(arr,log)
// forEach(arr,getLength)
// forEach(arr,uperCase)
//
//------------------------------------------------------------------------------------------------------

const arr3 = ['cotton', 'pads', 'natures', 'touch', 'softest'];

// const length = arr3.map(
//     function (item,inde,arr3) {
//         return item.length
//     }
// )
//
// console.log(arr3)
// console.log(length)

//
// const map3 = (data, callback) => {
//     const result = []
//     for (let i = 0; i < data.length; i++) {
//         result.push(
//             callback(data[i], i, data)
//         )
//     }
//
//     return result
// }
//
// const log = function (elemen, index, arr) {
//     console.log(elemen)
//     return elemen
//
// }
// const logIndex = function (elemen, index, arr) {
//     console.log(index)
//     return index
//
// }
//
// let r = map3(arr3, log)
// console.log(r)
// let h = map3(arr3, logIndex)
// console.log(h)

//------------------------------------------------------------------------------------------------------------

// const raid = [3,8,9,5,1]
// const id = 8
// const myFind = function (arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         const result = callback(arr[i])
//         if (result) {
//             return arr[i]
//         }
//     }
//     return 'no result'
// }
//
// const cb = function (item){
//     if(item === id){
//         return true
//     }
// }
//
//
// const result = myFind(raid,cb)
// console.log(result)
//
//
//----------------------------------------------------------------------------------------------------------
// const raid = [3,8,9,5,1]
// const id = 1
// const myIncludes = function (arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         const result = callback(arr[i])
//         if (result) {
//             return true
//         }
//     }
//     return false
// }
//
// const cb = function (it){
//     if(it === id){
//         return true
//     }
// }
//
//
// const result = myIncludes(raid,cb)
// console.log(result)
//
//
//---------------------------------------------------------------------------------------------------------
// const raid = [3,8,9,5,1]
// const id = 5
// const myIndexof = function (arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         const result = callback(arr[i])
//         if (result) {
//             return i
//         }
//     }
//     return 'no result'
// }
//
// const cb = function (item){
//     if(item === id){
//         return true
//     }
// }
//
//
// const result = myIndexof(raid,cb)
// console.log(result)
//
//
//----------------------------------------------------------------------------------------------------------
const raid = [3,8,9,5,1]
// const id = 5
const myIndexof = function (callback,arr,index) {
    for (let i = 0; i < arr.length; i++) {
        const result = callback(arr[i],index)
        if (result) {
            return i
        }
    }
    return 'no result'
}

const cb = function (item,id){
    if(item === id){
        return true
    }
}


const result = myIndexof(cb,raid,8)
console.log(result)
const result2 = myIndexof(cb,raid,7)
console.log(result2)



const raid = [3, 8, 9, 5, 1]
const myIndexof = function (arr, number, index = raid.length - 1) {
    for (let i = index; i < arr.length; i = i - 1) {
        if (arr[i] === number) {
            return i
        }
    }
    return 'no result'
}

const result = myIndexof(raid, 1)
console.log(result)