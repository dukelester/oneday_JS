//Javascript methods and this keyword:

// Objects can contain functionc
const color = {
        blue:'blue_color',
        white:'white_color',
        red:'red_color',
        myTheme : function (theme){
            console.log('The theme of the site is ' + theme)
        }
    }

color.myTheme('blue')

//jS method is an object property with a function value

//Built in methods:

/* 
1. parseInt = convert  numeric string into integer
*/
let price = '89';
price = parseInt(price)
console.log(price)

//Add a function an object

color.greetings= function(message){
    console.log(message)
}

console.log(color)

//using the this keyword ==> it is used to access a property of an object from within a method of the same method

const myColor = {
        blue:'blue_color',
        white:'white_color',
        red:'red_color',
        myTheme : function (){
            console.log('The theme of the site is ' + this.blue) //binding with the object
        }
    }
myColor.myTheme()

const person = {
    personName:'John',
    age:24,
    greeting:function(){
        let surName = 'Doe';
        console.log('The name of the person is ' + this.personName +' '+ surName + ' and He is ' + this.age +' years Old.')
    }
}
person.greeting()