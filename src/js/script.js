'use strict';

// Task#16
const year = Number(prompt('Твiй рік народження'));
const city = prompt('в якому місті живеш');
// const sport = prompt('Твiй улюблений вид спорту');

const today = new Date().getFullYear();
let age = 0;


if (year) {
    age = today - year;
} else {
    age = 'Шкода, що Ви не захотіли ввести свію дату народження'
}
document.write(`${age}`);

let userCity = null;//нул чтоб не было андефаинда

if (city === 'Kiev') {
    userCity = 'Ти живеш у столиці' + ' ' + city;
} else if (city === 'Washington') {
    userCity = 'Ти живеш у столиці' + ' ' + city;
} else if (city === 'London') {
    userCity = 'Ти живеш у столиці' + ' ' + city;
} else if (city) {
    userCity = 'Ти живеш у містi' + ' ' + city;
} else {
    userCity = 'Шкода, що Ви не захотіли ввести свое мiсто';
}

// let userSport = null;
//
//
// if (sport === 'Сноубординг') {
//     alert('Круто! Хочеш стати' + ' ' + 'Алессандро Хеммерле' + '?')
// } else if (sport === 'Фигурное катание') {
//     alert('Круто! Хочеш стати' + ' ' + 'Луна Хендрикс' + '?')
// } else if (sport === 'Гимнастика') {
//     alert('Круто! Хочеш стати' + ' ' + 'Ребека Андраде' + '?')
// } else {
//     alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту')
// }

//
alert(
    'Your age:' + `${age}` + 'year.' + '\n' + `${userCity}`
);