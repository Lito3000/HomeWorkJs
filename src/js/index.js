const complexArray = [
    [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
    [5, [6,[9], [7, [8, 9],7],5]],
    [[10, 11], 12, 13]
];

let sum = []
const complex = function (array){
for(let i = 0 ; i< array.length ;i++){
    if(typeof array[i] === 'object'){
        array[i] = complex(array[i])
    }else  if(typeof array[i] !== 'object') {
        sum.push(array[i])
    }
}
return sum
}


const  g = complex(complexArray)
console.log(g)

