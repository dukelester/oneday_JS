//nested functions ==> functions inside other function
//return a function ==> return the function 

function hello(personName){

    function displayName(age){
        console.log(`Hey mr man I am ${personName} I am ${age} years old`);
    }

    displayName(20)
}
hello('duke Lester')


//return a function

function area(radius){

    function calculation(){
        let area = radius * radius  * 3.142;
        console.log(`Area: ${area}`);
    }
    console.log("Hello this is a returng a function")

    return calculation;
   }

const ar1 = area(30);
console.log(ar1);
ar1()
