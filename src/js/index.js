const parseJSON = function (a) {
    try {
        JSON.parse(a)
        return true
    } catch (er) {
        console.log(er)
        return "Invalid JSON string"
    }
}

console.log(parseJSON('{"name": "John", "age": }'))