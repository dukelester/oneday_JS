//declarations 
/*
function functionName(parametes, default=parameters){
    //body

functionName(arguments)
    
    */

function Greetings(){
    console.log('Hello duke lester')
}

Greetings()
let total = 0;
function addNumbers(numbers) {
    for (let num=0; num<=numbers; num++){
        total += num
    }
    console.log(total)
}
addNumbers(10)
let result = 1;
function multiplyNumbers(numbers){
    for (let num=1; num<=numbers; num++){
        result *= num;
    }
    console.log(result)
}

multiplyNumbers(90)

//add return 
let sumOfEven = 1
let sumOfOdd =1
function evenNumbers(numbers){
    for (let num=1; num<=numbers; num++){
        if (num%2 ===0){
            sumOfEven += num; 
            
        }
        else{
            sumOfOdd +=  num;
        }
       
    }
    return sumOfEven 
}

let ans = evenNumbers(90)
console.log(ans +'ertyuiop[')

//using reusability, program is easier to read and makes the program easier.

//functions as expressions 

let x = function (name) {console.log(name)} //anonymous function
x('lester')

//scope ==> Availability of the variables and functions ==> global or local variables

//Hoisting -->using a function before declaration
//in varuiable hoisting, use the var since let and const does not allow hoisting.
//initializations are not hoisted
console.log(test)

var test ;

a = 56;
console.log(a)
var a 

//hoist a function ==> call the function before declaration

let myArea = area(21); //function call
console.log(myArea)

function area(radius){ //function definitaion
    return radius * radius * 3.142 //calculations and return
}


myNameFun('duke', 'lester');


function myNameFun(name1, name2){
    let full_name = name1 + ' ' + name2;
    console.log(full_name);
}

//recursion

//recursion is where the function calls itself
//syntax:

/*
function myFunction(){
    function body
    myFunction() ==> calling itself
}
myFunction() ==> function call
*/

// function rectArea(width, length){
//     let area = width * length;
//     rectArea(20, 40) //function calling itself
//     console.log(area)

// }
// rectArea(30, 70)

//use the base conditions in function recursion if..else statements
/*
function myFunction(){

    function body
    if(condition){
        myFunction() ==> calling itself
    }
    else{
        stop calling the function itself
    }
   
}
myFunction() ==> function call
*/