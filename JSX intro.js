//Es6 is the new versionof JS

// JAvascript let keyword for declaring variables
let age = 78; //block-based
const pi = 3.142//constants
//the arrow function 

//normal function 
let x = function (x, y) { 
    return x * y
}

//the arrow function 
let myX = (x, y) => { x * y }
//classes 

class Myclass {
    constructor(myName){
        this.name = myName;
    }

}
const obj = new Myclass('henry');
console.log(obj.name)

//default parameters :
function sum(y, x=78){
    console.log(x + y)
}
sum(9)

//in arrow function

let mySum = (c, d=70) => {
    console.log(c + d);
}
console.log(mySum(20))

//for template ilterals use the backtick `${passyourvarible}`

//destructuring
//makes it easy to assign values to new variables.
//example:

const person = {
    name:'sara',
    age:34,
    address:'Westlands',
    work:'safaricom',
    drives:'car toyota',
    middleName:'Mauti'
}

let personName = person.name
let address = person.address
let personAge = person.age

console.log(personName +' lives in ' + address + ' and she is '+ age +' years old')

//destructuring the person in ES6

let {work, middleName, drives}  = person //destrucuring syntax
console.log(work,middleName,drives)

//import and export 

// export default function hello(greeting){
//     console.log('Hello Lester Duke Let us go to Es6')
// }



//JS Promises ==>used to handle asynchronous tasks.

//returns a promise 
/*
let countValue = new Promise(function(resolver, reject){
     reject('Promise rejected')

});
// executes when promise is resolved successfully
countValue.then(function successValue(result){
    console.log(result)//Promise resolved.
})

*/
//The Rest parameter and the spread operator
// The rest parametr is used to represent the endless values or items in an array

function show(a, b, ...args) {
    console.log(a, b, ...args) // ... the rest parameter and this is called spread
}
show('one', 'two', 'three', 'four', 'five', 'six', 'seven', )

let data = [81,28,38,40,]
let data2 = [1,2,3,4,5,90,789, ...data] // spread syntax to copy data from an array to another
console.log(data2)
