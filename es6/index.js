const obj = {
  greet() {},
  greet1: function () {},
  greet2: () => {},
};

// object literal
const obj = {};
obj.greet = function () {};
obj.greet1 = function () {};
obj.greet2 = () => {};

// push, pop, shift, unshift
// splice

const array = [
  { name: 'mason', age: 18 },
  { name: 'james', age: 20 },
];

array.find((i) => i.name === 'mason');
// { name: 'mason', age: 18 }

// class inheritance
// prototype pattern
// 代理 delegate

// Fruit getPrice()
// apple.getPrice()

function Person(name) {
  this.name = name;
  this.toString = function () {
    console.log('name: ' + this.name);
  };
}

function Person(name) {
  this.name = name;
  this.toString = function () {
    console.log('name: ' + this.name);
  };
  return undefined;
}

const obj = Person('mason');
obj === undefined;

function Person(name) {
  const person = {};
  // 原型链的关联
  person.name = name;
  person.toString = function () {
    console.log('name: ' + this.name);
  };
  return person;
}
