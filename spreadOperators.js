// The spread operators.  (...) used to extend or expand an iterable or an array 

//Examples

const arrayValue = ['mary','lester','peters','path'];
console.log(arrayValue); //all the names ==>[ 'mary', 'lester', 'peters', 'path' ]
console.log(...arrayValue); // gives all the names without the array notation ===>mary lester peters path
//where the console.log(...arrayValue) === console.log('mary', 'lester' ,'peters', 'path')

//copy the array using the spread operator ...arrayValue
const newNAmes = [...arrayValue, 'Henry','Tina','Moses']
console.log(newNAmes)

const newEwuivalent = [...arrayValue] //copying the array to another array.
console.log(newEwuivalent)

//The spread operator ... in objects

const numbers = {one:1,two:2,three:3}
const numbers2 = {three:3,four:4, five:5}

const finalNumbers = {...numbers, ...numbers2}//joining two objects using the spread operator.
console.log(finalNumbers)

//The rest parameter ==> When the spread operator is used as a parameter.
//examples

let func = function(...args){
    console.log(args);
}
func(4356,89,309) //we can pass any number of arguments
func(4356)//passing just 1 argument

let func2 = function(age,...args){
    console.log(age,args);
}
func(4356,89,309) //we can pass any number of arguments
func(4356, 90, 67,45,32)//passing just 1 argument