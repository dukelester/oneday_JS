//makes it easier to assign the array values and object properties to distionct variables.
const person = {
    fullName: 'Kenny Malliee',
    age:67,
    location:'berlin',
    car:'BMW 23'
}

//getting element properties out we have to use person.fullName , person.age etc. 
// Using the destructuring however it will be :
//use the same name 
let {fullName, age, location, car} = person
console.log(fullName, age, location,car)

const person2 = {
    myName:'Jack',
    age3:26,
    hobbies:{
        read:true,
        swim:true,
    }
}

let {myName,age3,hobbies:{read, swim}} = person2
console.log(myName ,age,read)