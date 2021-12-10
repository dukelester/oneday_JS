//Arrow functions ==> intoduced in ES6 and allows one to create functions in a more cleaner way compared to regular functions.
// example

let area = function (radius) {
    return radius * radius * 3.142
}

console.log(area(21))

//in arrow function form
let area2 = (radius1) =>{ 
    return radius1 * radius1 * 3.142
};
const h = area2(81)
console.log(h)

/*
let myFunction = (arg1, arg2, ...argsN) =>{
    statements
}
*/

// let radii = [34,89,67,45,39,28,20,25]
let finalArray = [];
let myAreas = (radii) => {
    for (radius3 in radii) {
        myradius = radii[radius3]
        // console.log(myradius)
        finalArea = myradius * myradius* 3.142
        console.log(finalArea)
        finalArray.push(finalArea)

    }
}

answer = myAreas([34,89,67,45,39,28,20,25])
console.log(answer)
console.log(finalArray)

let myAge = 30;

let welcome = (myAge < 20) ? () => console.log('You are a baby') :
                                () => console.log('You are grown');
welcome()


let sum = () => 40; // passing the default value to a function.

let finale = sum() + 90; // using  default value of the function in the calculation.
console.log(finale)