const createUser = function obj(name, age) {
  const user = {
    name: name,
    age: age,
  }
  user.greet = greet;
  return user
};
createUser('n', 34);

function greet(){
  console.log(`Hello, my name is ${this.name}`);
}

let user1 = createUser("Alice",25)
let user2 = createUser("Bob",30)

let g = 6;
console.log(g)