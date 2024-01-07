'use strict';

const numOrStr = prompt('input number or string');


switch (false){
    case numOrStr !== null:
        console.log('ви скасували');
        break;
    case numOrStr !== '':
        console.log('Empty String');
        break;
    case true !== isNaN( +numOrStr ):
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!')
}
