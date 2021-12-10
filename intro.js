// javascript can be run in web console, using Node.js and by creating the web pages

console.log('hello lester this is the Js test on IDE');
//varibles ==> The container used to store data to be used in the program.
let num = 3;
console.log(num);
//decalre using let and var .. using const for constants.
//var => old js while let is used in Es6,var is function based while let is block based
//initialize the variables with = sign
let k;
k = 90; //assignment
let r = 90;
let m = 900;
let p = m + r;
console.log(p)

//observe camelCase method
//constants declarations const x = 90 ==.> cannot be changed later in the code.
// It must be initialized with a value
const myAge = 34;
console.log(myAge);

//The console.log() function ==> console debugging.
const firstName = 'John';
const lastName = 'Doe';
console.log(firstName + ' ' + lastName);
console.debug()

//DataTypes:
//integers, strings,objects, arrays,number, BigInt,Boolean, undefined, symbol,
//primitive ==> hold only a single value ==>numbers
//non-primitive ==> hold more than one value ==> object

//strings ==> store series of characters .. 'single quotes', "double quotes", `backticks`
let fullName = 'duke lester';
let address = "juja Oasis, Hotel blue Horns";
let work = `Django, React Js and React Native Programmer`;

console.log(fullName, address, work)
//backticks ae used when including variablea to the string 

console.log(`I live in ${address}, my full name is ${fullName} and i work as ${work}`);

//booleans ==> true or false

//object

const userDetails = {
    'fullName':'jane maguire',
    'location':'machakos',
    'age':90,
    'occupation':'self employed'
}

console.log(userDetails, userDetails.age++)