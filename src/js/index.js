const createUser = function obj(a, b) {
  const user = {
    name: a,
    age: b,
  };
  user.greet = greet;
  user.ageUser = years;
  return user;
};

const greet = function greet() {
  console.log(`Hello, my name is ${this.name}`);
};

const years = function years() {
  console.log(`My age is ${this.age}`);
};

const user1 = createUser('Alice', 25);
const user2 = createUser('Bob', 30);
user1.greet();
user2.greet();
user1.ageUser();
const g = user1.age;
console.log(g);
