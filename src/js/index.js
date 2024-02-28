const parseJSON = function (a) {
    try {
        JSON.parse(a)
        return true
    } catch (error) {
        return "Invalid JSON string"
    }
}

console.log(parseJSON('{"name": "John", "age": }'))