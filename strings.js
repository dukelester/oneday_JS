//Primitive data type that is used to work with text.

const myName = 'John';
console.log(myName);

//creating the strings ==> use the double quotes, single quotes and the backticks.
const firstName = 'John';
const lastName = 'Doe';
const result = `The name is ${firstName} and the last name is ${lastName}`;
console.log(result);

//backticks are used to include the varibles on the strings.
console.log(firstName[1], lastName[0]) //accessing the characters in the string.
// use the charAt()
console.log(firstName.charAt(2), lastName.charAt(2)) //accessing the characters in the string using the charAt

//The strings are immutable ==> The characters can not be changed.
const multiString = 'hello lester '+
'hello again lester'+
'jannsgfghjkl'
console.log(multiString)
console.log(multiString.length)

//avoid using the string objects as they slow dwon the program.
newString = multiString.toUpperCase()
console.log(newString)
newString2 = multiString.toLowerCase()
console.log(newString2)
//the String() function is used to convert various data types to string.
const a = 225;
const newA = String(a)
console.log(newA)
console.log(typeof(newA))