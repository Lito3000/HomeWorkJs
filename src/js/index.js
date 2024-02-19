let foo = 50
function ex(){
    let foo = 101
    function ex1(){
        let foo = 102
        console.log(foo)//window
    }
    ex1()
}
ex()

let a = 10
console.log(a)

var h = 30
console.log(h)

window.n = 40
console.log( window.n)

console.log(this)//window
if (true) {
    console.log(this)//window
}
let g = function () {
    if (true) {
        return  this  //window
    }
}
let f = g()
console.log(f)

function expration() {
    if (true) {
        return  this  //window так как OuterEnviromentRecord у нас window
    }
}
let f1 = expration()
console.log(f1)
let sumJob = {
    name: 'mars',
    year: '1986'
}

function example(a, b) {
    console.log(this, a + b)//Object так как вызывается с объекта
}//Object так как OuterEnviromentRecord у нас Object

example.call(sumJob, 10, 20)

let obj = {
    clean: 'hand',
    action: 'alcohol',
    sanitizing: function () {
        console.log(this)
        return this
    }
}
console.log(obj.sanitizing())

