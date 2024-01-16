'use strict';

let sum = null;
const creatFunction = function (max) {

    for (let i = 0; i < max; i++) {

        sum = sum + (Math.round(Math.random() * 100)) + ' ';
    }

}

creatFunction(100)
console.log(sum)

// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
// let sum = null;
// const creatFunction = function (elem,str) {
//
//     for (let i = 0; i < elem; i++) {
//
//         sum = sum + str[Math.round(Math.random() * (str.length - 1))];
//     }
// }
//
// creatFunction(16,characters)
// console.log(sum)


// Date.prototype.getWeek = function() {
//     var date = new Date(this.getTime());
//     date.setHours(0, 0, 0, 0);
//     // Thursday in current week decides the year.
//     date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
//     // January 4 is always in week 1.
//     var week1 = new Date(date.getFullYear(), 0, 4);
//     // Adjust to Thursday in week 1 and count number of weeks from date to week1.
//     return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
//         - 3 + (week1.getDay() + 6) % 7) / 7);
// }
//
// // Returns the four-digit year corresponding to the ISO week of the date.
// Date.prototype.getWeekYear = function() {
//     var date = new Date(this.getTime());
//     date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
//     return date.getFullYear();
//
// }
//
// let g = Date.prototype.getWeekYear
// console.log(g)