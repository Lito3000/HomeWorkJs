//Task#1
const obj = {
    name: 'Alex',
    age: '23',
}

const elem = function (prefix) {
    console.log(this, prefix)
    console.log(prefix + ' ' + this.name)
}


function myApply(func, context, argument) {
    context.foo = func
    context.foo(argument)
    delete context.foo;
    console.log('myAplay', context)
}

function myBind(func, context, argument) {
    return function () {
        myApply(func, context, argument)
    }
}

const binded = myBind(elem, obj, 'Mr.')
console.log(binded)
binded()