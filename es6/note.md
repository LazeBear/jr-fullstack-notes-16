ECMAScript
ES

Ecma international

ES5 2009
ES6 2015
ES7 2016
ES2022
ES6+

Babel

function scope
globe scope
block scope 块级作用域

foo();

function foo(){
var fruit = 'apple';
}

const obj = {};

value vs reference
pass by value vs pass by reference

function expression
const foo = function(){};

function declaration
function foo(){}

back tick
``
''

解构赋值

const fruit = {name: 'apple', price: 12, color: 'green'};
const {name, ...rest} = fruit;
rest = {price: 12, color: 'green'};

shallow/deep clone
const fruit = {name: 'apple', price: 12, color: 'green', location: {city: 'brisbane'}};
const newFruit = {...fruit};

newFruit.name = 'pear';
fruit.name => 'apple'
newFruit.location.city = 'sydney';
fruit.location.city => sydney;

lodash

const add = (x, y) => {
return {sum: x + y};
};
// equals
const add = (x, y) => ({sum: x + y});

lexical scope

context

const calendar = {
currentDay: 6,
nextDay() {
const cb = () => {
this.currentDay++;
console.log(this.currentDay);
};
setTimeout(cb);
},
};
calendar.nextDay();
