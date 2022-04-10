# ES6+

- [var vs let and const](#let-and-const)
- [Template String](#template-string)
- [Spread operator](#spread-operator)
- [Destructuring](#destructuring)
- [Default parameters](#default-parameters)
- [Arrow function](#arrow-function)
- [this](#this)
- [Common array operations](#common-array-operations)
- [Set](#set)
- [Classes](#classes)
- [Closure](#closure)

## var vs let and const

They all used for variable declaration, the main difference is the scope.

### var

#### Scope

var is function scoped, it means if the variable is declared within a function, it can be accessed within the function. Similarly, if var is used outside of the function, the variable can be accessed in via window object. (in the browser)

```js
var apple = 'apple';
function foo() {
  var pear = 'pear';
  console.log(apple); // apple
  console.log(pear); // pear
}
console.log(apple); // apple
console.log(pear); // Uncaught ReferenceError: pear is not defined
```

#### Re-declare and update

```js
var fruit = 'apple';
var fruit = 'pear';
console.log(fruit); // pear
fruit = 'grape';
console.log(fruit); // grape
```

#### Hoisting

```js
console.log(fruit); // undefined
var fruit = 'apple';
```

equals

```js
var fruit;
console.log(fruit); // undefined
fruit = 'apple';
```

#### Problem

```js
var fruit = 'apple';
if (true) {
  // think about this is in another file
  var fruit = 'pear';
}
console.log(fruit); // pear
```

### let

#### Scope

let is block scoped. A block is a chunk of code wrapped by currly brackets `{}`
for example:
`function() {// this is a block}`
`if(true) {// this is also a block}`
let's reuse the example above but replace the keyword with _let_

```js
let fruit = 'apple';
if (true) {
  let fruit = 'pear';
}
console.log(fruit); // apple
```

#### Re-declare and update

```js
let fruit = 'apple';
// let fruit = "pear"; // Uncaught SyntaxError: Identifier 'fruit' has already been declared
fruit = 'grape';
console.log(fruit); // grape
```

#### Hoisting

```js
console.log(fruit); // Uncaught ReferenceError: Cannot access 'fruit' before initialization
let fruit = 'apple';
```

Different to _var_, let is hoisted, but the vairable is not initialized

### const

Scope and the hoisting is the same as _let_

#### Re-declare

```js
const fruit = 'apple';
// const fruit = "pear"; // Uncaught SyntaxError: Identifier 'fruit' has already been declared
fruit = 'grape'; // Uncaught TypeError: Assignment to constant variable.
console.log(fruit);
```

#### Update

```js
const fruit = { name: 'apple', color: 'red' };
// fruit = {name: "apple", color: "green"}; // Uncaught TypeError: Assignment to constant variable.
fruit.color = 'green';
console.log(fruit); // {name: "apple", color: "green"}
```

similar in array

```js
const fruits = [];
// fruits = ["apple"]; // Error
fruits.push('apple');
console.log(fruits); // ["apple"]
```

### Others

```js
console.log(fruit); // Uncaught ReferenceError: fruit is not defined
```

### Quiz

1. What's the output of the following code

```js
var i = 5;
for (var i = 0; i < 3; i++) {
  console.log(i);
}
console.log(i);
```

2. What's the output of the following code

```js
let i = 5;
for (let i = 0; i < 3; i++) {
  console.log(i);
}
console.log(i);
```

3.

```js
var arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 1000);
}
```

### Conclusion

| keyword | scope    | re-declare | update | hoisting              |
| ------- | -------- | ---------- | ------ | --------------------- |
| var     | function | Yes        | Yes    | Yes (undefined)       |
| let     | block    | No         | Yes    | Yes (not initialized) |
| const   | block    | No         | No     | Yes (not initialized) |

Extra reading source
[Var, Let, and Const – What's the Difference?](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)

## Template String

Also named, template literal, string interpolation

```js
const name = 'mason';
const age = 104;
// es5
console.log('My name is ' + name + ", and I'm " + age + ' years old');

//es6
console.log(`My name is ${name}, and I\'m ${age} years old`);
```

## Spread operator

```js
const array = [1, 2];
const newArray = [...array, 3, 4];
console.log(newArray); // [1, 2, 3, 4]
```

```js
const fruit = { name: 'apple', color: 'green' };
let newFruit = { ...fruit, color: 'red' };
console.log(newFruit); // {name: "apple", color: "red"}
newFruit = { color: 'red', ...fruit };
console.log(newFruit); // {color: "green", name: "apple"}
```

## Destructuring

Object destructuring extracts property from object and assigns it to variables.
One way would be using the dot notation

```js
const fruit = { name: 'apple', color: 'red' };
const name = fruit.name; // apple
const color = fruit.color; // red
```

With the new syntax, we don't need to repeatly refer to the `fruit` object

```js
const fruit = { name: 'apple', color: 'red' };
const { name, color } = fruit;
console.log(name); // apple
console.log(color); // red
```

we can also rename the variable

```js
const fruit = { name: 'apple', color: 'red' };
const { name: fruitName, color: fruitColor } = fruit;
console.log(fruitName); // apple
console.log(fruitColor); // red
```

or desctructing an array

```js
const fruits = [
  { name: 'apple', color: 'red' },
  { name: 'pear', color: 'green' },
];
const [apple, pear] = fruits;
console.log(apple); // {name: "apple", color: "red"}
console.log(pear); // {name: "pear", color: "green"}
const [{ color: appleColor }, { color: pearColor }] = fruits;
console.log(appleColor); // red
console.log(pearColor); // green
```

more complicated use cases

```js
const [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo); // 1
console.log(bar); // 2
console.log(baz); // 3
```

```js
const [, , third] = ['foo', 'bar', 'baz'];
console.log(third); // "baz"
```

```js
const [head, ...tail] = [1, 2, 3, 4];
console.log(head); // 1
console.log(tail); // [2, 3, 4]
// Rest element must be last element
```

```js
const [missing = true] = [];
console.log(missing); // true
```

## Default parameters

```js
function sum(a = 1, b = 1) {
  return a + b;
}
console.log(sum()); // 2
console.log(sum(undefined, 2)); // 3
console.log(sum(3, 4)); // 7
```

## Arrow function

```js
const add = function (x, y) {
  return x + y;
};
// vs
const add = (x, y) => {
  return x + y;
};
// equals
const add = (x, y) => x + y;
```

### Callback

Explain in a simple way, pass the function as a parameter and when some _event_ happened (addEventListener), execute this function.
Frequently used for async or sequential purpose

```js
function logger(param) {
  console.log(param);
}
function sum(x, y, callback) {
  setTimeout(function () {
    const total = x + y;
    callback(total);
  }, 1000);
}
sum(1, 2, logger);
```

### Callback with arrow function

```js
setTimeout(function () {
  console.log('normal function');
}, 1000);

setTimeout(() => {
  console.log('arrow function');
}, 1000);
```

## Closure

Closures are everywhere in JS. A closure is when a function has access to its lexical scope even when it is called outside of it. Closures are created every time a function is created, at function creation time.

A few complex but common closure cases:

1. a function was passed to another function as param

```js
// we normally don't write this code
const number = 1;
function foo() {
  console.log(number);
}
function bar(fn) {
  const number = 2;
  fn();
}
bar(foo); // 1
```

2. a function was returned by another function

```js
function foo() {
  const number = 1;
  return () => {
    console.log(number);
  };
}
const number = 100;
foo()(); // 1
```

We can use this technique to hide some data.

```js
function createCounter() {
  let counter = 0;
  const increment = () => {
    counter++;
  };
  const getCount = () => {
    return counter;
  };
  return {
    increment,
    getCount,
  };
}
const counter = createCounter();
counter.increment();
console.log(counter.getCount());
```

### IIFEs

Immediately Invoked Function Expressions
Commonly used to avoid polluting the global namespace and modules!

```js
(function () {
  // some variable in it's own scope
})();
```

## this

In most cases, the value of `this` is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called. [[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)]\* \*[strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) is enabled by default in ES6 modules

### _this_ keyword in normal functions

```js
function foo() {
  console.log(this);
}
foo(); // window
```

### _this_ keyword in normal functions with bind, call, apply

```js
// a1,a2
foo.call({ number: 1 }); // {number: 1}
// [a1,a2]
foo.apply({ number: 2 }); // {number: 2}
// bind returns a new function
const bar = foo.bind({ number: 3 });
bar(); // {number:3}
```

### _this_ keyword in an object and callback functions

```js
const calendar = {
  currentDay: 6,
  nextDay() {
    this.currentDay++;
    console.log(this.currentDay);
  },
};
calendar.nextDay();
```

```js
const calendar = {
  currentDay: 6,
  nextDay() {
    setTimeout(function () {
      this.currentDay++;
      console.log(this.currentDay);
    }); // .bind(this)
  },
};
calendar.nextDay();
```

In arrow function, `this` points to the enclosing lexical context's `this`.

```js
const calendar = {
  currentDay: 6,
  nextDay() {
    setTimeout(() => {
      this.currentDay++;
      console.log(this.currentDay);
    });
  },
};
calendar.nextDay();
```

```js
const calendar = {
  currentDay: 6,
  normal: function () {
    console.log(1, this);
    setTimeout(function () {
      console.log(2, this);
    });
  },
  arrow: function () {
    console.log(3, this);
    setTimeout(() => {
      console.log(4, this);
    });
  },
};
calendar.normal();
calendar.arrow();
```

### quiz

```js
const object = {
  message: 'Hello, World!',

  getMessage() {
    const message = 'Hello, Earth!';
    return this.message;
  },
};

console.log(object.getMessage()); // ??
```

```js
const object = {
  who: 'World',

  greet() {
    return `Hello, ${this.who}!`;
  },

  farewell: () => {
    return `Goodbye, ${this.who}!`;
  },
};

console.log(object.greet()); // ??
console.log(object.farewell()); // ??
```

```js
const object = {
  who: 'mason',
  cb() {
    console.log(`Hello, ${this.who}!`);
  },
};

function foo(cb) {
  cb();
}

foo(object.cb); // ??
object.cb(); // ??
```

## Common array operations

### Manipulation

```js
const fruits = ['apple'];

fruits.push('pear');
console.log(fruits); // ["apple", "pear"]
fruits.unshift('grape');
console.log(fruits); // ["grape", "apple", "pear"]
// splice(x,y,newAdded)
// remove y items from index x, and add newAdded
fruits.splice(1, 1, 'watermelon', 'peach');
console.log(fruits); // ["grape", "watermelon", "peach", "pear"]
let fruit = fruits.pop();
console.log(fruit); // pear
console.log(fruits); //  ["grape", "watermelon", "peach"]
fruit = fruits.shift();
console.log(fruit); // grape
console.log(fruits); // ["watermelon", "peach"]
```

### Iteration

#### for loop

```js
const fruits = ['apple', 'pear'];
for (let index = 0; index < fruits.length; index++) {
  const fruit = fruits[index];
  console.log(fruit);
}
// apple
// pear
```

#### for...of

```js
const fruits = ['apple', 'pear'];
for (let fruit of fruits) {
  console.log(fruit);
}
// apple
// pear

// for...in -> 0, 1    usually used in object
```

#### forEach

```js
const fruits = ['apple', 'pear'];
fruits.forEach((fruit) => console.log(fruit));
// apple
// pear
// cannot use break here
```

### Map

```js
const fruits = ['apple', 'pear'];
const newFruits = fruits.map((fruit) => ({
  name: fruit,
  price: 10,
}));
console.log(newFruits);
// [{name: "apple", price: 10},{name: "pear", price: 10}]
```

### Reduce

```js
const numbers = [1, 2, 3];
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum); // 6
```

### Search

```js
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(2)); // true
// Array.some
console.log(numbers.indexOf(2)); // 1
// Array.findIndex
```

```js
const numbers = [1, 2, 3, 4, 5];
const odds = numbers.filter((i) => i % 2);
console.log(odds); // [1,3,5]

const fruits = [
  {
    name: 'apple',
    color: 'red',
  },
  {
    name: 'pear',
    color: 'green',
  },
  {
    name: 'grape',
    color: 'green',
  },
];
const filteredFruits = fruits.filter((i) => i.color === 'green');
console.log(filteredFruits);
// [{name: "pear", color: "green"}, {name: "grape", color: "green"}]
```

```js
const fruits = [
  {
    name: 'apple',
    color: 'red',
  },
  {
    name: 'pear',
    color: 'green',
  },
  {
    name: 'grape',
    color: 'green',
  },
];
const greenFruit = fruits.find((i) => i.color === 'green');
console.log(greenFruit);
// {name: "pear", color: "green"}
```

#### Extra reading source

[link](https://dmitripavlutin.com/operations-on-arrays-javascript/)

## Set

Set is a data structure, we use it to store _unique_ values.

```js
const set = new Set([1, 2, 3, 4, 4]);
console.log(set); // Set(4) {1, 2, 3, 4}
set.add(5);
console.log(set); // Set(5) {1, 2, 3, 4, 5}
set.add(1);
console.log(set); // Set(5) {1, 2, 3, 4, 5}
console.log(set.has(5)); // true
set.delete(1);
console.log(set.has(1)); // false
console.log(set.size); // 4
```

```js
const array = [1, 2, 2, 3, 4, 4];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray); // [1, 2, 3, 4]
```

## Classes

Classes are a template for creating objects. Classes are in fact functions, class is only a syntax sugar.

```js
function Person(name) {
  this.name = name;
  this.toString = function () {
    console.log('name: ' + this.name);
  };
}
var mason = new Person('mason');
mason.toString(); // name: mason
```

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  toString() {
    console.log(`name: ${this.name}`);
  }
}
const mason = new Person('mason');
mason.toString(); // name: mason
```

### extends

```js
class Teacher extends Person {
  constructor(name) {
    super(name);
  }
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

const mason = new Teacher('mason');
mason.teach(); // mason is teaching
mason.toString(); // name: mason -> BUT how?
```

```js
// is mason constructed by Teacher?
mason instanceof Teacher; // true
mason instanceof Person; // true
mason instanceof Object; // true
```

## quiz

```js
function Pet(name) {
  this.name = name;
  this.getName = () => this.name;
}

const cat = new Pet('Fluffy');

console.log(cat.getName()); // Fluffy

const { getName } = cat;
console.log(getName()); // Fluffy
```

```js
var scope = 'global scope';
function checkscope() {
  var scope = 'local scope';
  function f() {
    return scope;
  }
  return f();
}
checkscope(); // local
```

```js
var scope = 'global scope';
function checkscope() {
  var scope = 'local scope';
  function f() {
    return scope;
  }
  return f;
}
checkscope()(); // local
```

Quiz questions references
[1](https://dmitripavlutin.com/javascript-this-interview-questions/#question-1-variable-vs-property)
