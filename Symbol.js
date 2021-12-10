//Symbol.
//Symbols are immutable data types  which are unique and immutable ==> Cannot be changed at all.

const value1 = Symbol('hello'); //the two values are not equal.
const value2 = Symbol('hello');

console.log(value1 === value2);//false

//creating a Symbol()
const x = Symbol();
console.log(typeof (x));// symbol

const symbol1 = Symbol('description for the symbol');
console.log(symbol1.description)