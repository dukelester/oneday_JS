//An Array is an object that can store multiple values at once.[python list]

const marks = [34,56,77,88,99,23,90,7];
console.log(marks);
console.log(marks.length);


//creating an array 
//1.Using the array literal

const array1 = [1,2,3,4,5,6,7];
const names = ['Duke','Lester','Peter','John','Jane']
console.log(array1, names);

//2.Using the new keyword.
const myAds = new Array('eat','shoes','boots','food')
console.log(myAds)

//array with functions 
const myFunctions = [
    function hello (){console.log("hello duke lester")},
    [90,67,'marks','students'],
    function myName(){console.log("Hey this is My Name")}
]
console.log(myFunctions)

//access elements in an array ==> Using the index=0,1,2,3,4,5... and the square brackets.
console.log(myFunctions[0])
console.log(myAds[3])

//Add elements to an array ==> use the push() and the unshift() functions to add elements to the array.
let myActivities = ['eat','dress'];

myActivities.push('exercise'); //push() method adds elements to the end of the array
myActivities.push('sleep');
console.log(myActivities)

myActivities.unshift('Pray') //Unshift() adds an element to the beginning of the array
myActivities.unshift('Walk')
console.log(myActivities)

//changing the elements of the array
myActivities[0] ='reading' //changing the elements of the array
console.log(myActivities)

//removing elements from the array using pop() and shift() method.

myActivities.pop(); //pop() removes the last elements from the array
console.log(myActivities)
myActivities.shift();
console.log(myActivities)

//length of the array
console.log(myActivities.length)
//more methods : concat(), indexOf(), find(),findIndex(),forEach(),includes(),push(),pop(),shift(),unshift(), sort(), slice(),splice()
console.log(myActivities.sort())
newArray = myActivities.concat(myAds)
newArray.sort()
console.log(newArray)

//Multidimentional Array
//an array which contains other arrays inside 
const data = [[2,34,55,90], [90,7,3,4], [9,56,22,4]];
console.log(data)

for (let d of data){
    console.log(d);
    for(k of d){
        console.log(k);
    }
}

