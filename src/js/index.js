
console.log(parseJSON('{"name": "John", "age": 30}')); // повинно вивести об'єкт { name: 'John', age: 30 }
console.log(parseJSON('{"name": "John", "age":')); // повинно вивести помилку "Invalid JSON string"