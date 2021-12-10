//objects are non-primitive data types which allow us to store a collections of data
//no need for classes to create an object.

//examples:
const student = {
    firstName: 'hello',
    lastName: 'duke',
    age :24
};

console.log(student)

/*
Syntax: 
const object_name = {  //Key:value pair separated by commas
    key1:'value',
    key2:'value2',
    key3:'value3',
}
Key:value pair are called the properties

Accessing the Objects:
use the Key to access the value of a property by using:

1. The dot notation
object_name.key1
2. Using the bracket notation
object_name[key1]
*/

//using dot notation

console.log(student.age);
console.log(student.firstName);
console.log(student.lastName);

//using the bracket notation
console.log(student['age']);
console.log(student['firstName']);
console.log(student['lastName']);

//using the nested objects 

const bookStore = {
    bookName : 'my life as a coder',
    author :{
        firstName:'duke',
        lastName:'Lester',
        age:24,
        phone:'+254799443070',
        origin:'kenyan'
    },
    numberOfPages:300,
    color:{
        blue:'blue_color',
        white:'white_color',
        red:'red_color'
    },
    availability:true,
    costPrice:2000

}

console.log(bookStore)
author_name = bookStore.author.firstName + bookStore.author.lastName
console.log(author_name)
console.log(bookStore.author.origin)

//Object Methods

//an object can contain a function 

const color = {
        blue:'blue_color',
        white:'white_color',
        red:'red_color',
        myTheme : function (theme){
            console.log('The theme of the site is ' + theme)
        }
    }

color.myTheme('blue')