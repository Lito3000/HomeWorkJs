const createUser = function obj(name, skills) {
  const user = {
    name,
    skills,
  };

  // eslint-disable-next-line no-use-before-define
  user.req = requirement;
  // user.ageUser = years;
  return user;
};

const requirement = function req() {
  console.log(`Hello, my name is ${this.name}`);
};

// const years = function years() {
//   console.log(`My age is ${this.age}`);
// };

const user1 = createUser('Alice', 25, 6);
const user2 = createUser('Bob', 30);
console.log(user1.skills);
console.log(user2.name);
user2.req();
