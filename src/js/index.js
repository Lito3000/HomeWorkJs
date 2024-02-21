//Task#1

const arr = ['professional', 'r', 'strength', 'cleansing', 'moisturising', 'hand', 'cleanser', 'action', 'antimicrobial'];

const x = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > 5) {
            str[i] = str[i]
        } else {
           arr.splice(str[i],1)
        }
    }
    return arr
}

const result = x(arr)
console.log(result)