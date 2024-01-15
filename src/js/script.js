'use strict';

const cookRoom = Number(prompt('How many liters of borscht to prepare?'))
let kitchen = function kitche(kilo) {
    if (isNaN(kilo) || !(typeof kilo === "number")) return NaN;

    return Math.round(4 * 0.75 * kilo) + 'кг' + ' ' + (4 * 0.75 * kilo * 13) + 'грн';
}
alert(kitchen(cookRoom))