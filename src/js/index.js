const greet = function greet() {
  console.log(`Hello, my name is ${this.name} , my age is ${this.age}`);
};
const createUser = function obj(name, age) {
  const user = {
    name,
    age,
  };
  user.greet = greet;

  return user;
};

const user1 = createUser('Alice', 25);
const user2 = createUser('Bob', 30);
user1.greet();
user2.greet();
