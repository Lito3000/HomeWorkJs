'use strict';

// Task#16
const year = Number(prompt('Твiй рік народження'));
const city = prompt('в якому місті живеш');
const sport = prompt('Твiй улюблений вид спорту');

const today = new Date().getFullYear();
let age = 0;


if (year) {
    age =  'Тобi' + ' ' + `${today - year}` + ' '+'роки';
} else {
    age = 'Шкода, що Ви не захотіли ввести свію дату народження'
}


let userCity = null;

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

let userSport = null;


if (sport === 'Сноубординг') {
    userSport = 'Круто! Хочеш стати' + ' ' + 'Алессандро Хеммерле' + '?';
} else if (sport === 'Фигурное катание') {
    userSport = 'Круто! Хочеш стати' + ' ' + 'Луна Хендрикс' + '?';
} else if (sport === 'Гимнастика') {
    userSport = 'Круто! Хочеш стати' + ' ' + 'Ребека Андраде' + '?';
} else if (sport){
    userSport = 'Твiй любимий вид спорту' + ' ' + sport;
}else {
    userSport = 'Шкода, що Ви не захотіли ввести свій улюблений вид спорту';
}


alert(
   `${age}`  + '\n' + `${userCity}` + '\n' + `${userSport}`
);

document.write(`${age}`  + '</br>' + `${userCity}` + '</br>' + `${userSport}`);