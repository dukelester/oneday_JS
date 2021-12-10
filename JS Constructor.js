//Constructors are functions that are used to create objects.

//constructor function

function Person() {
    this.name = 'Kennny';
    this.age = 45;
    this.address="Juja Location"
}

//create an object.
const person = new Person(); //using the new keyword

console.log(person);
//create multiple objects from one constructor

const student = new Person(); //using the new keyword
const woman = new Person(); //using the new keyword
const man = new Person(); //using the new keyword

console.log(student, woman,man);
console.log(student.age)

//Function Parameters.
//constructor function with paramters

function Car(brand, color, milleage, number_seats, cost){
    this.brand = brand;
    this.color = color;
    this.milleage = milleage;
    this.number_seats = number_seats;
    this.cost = cost;

    this.sellCar= function(buyer){
        console.log(`The car was successifully sold to ${buyer} at the price of ${this.cost}`) 
    }

}

//creating objects
const car = new Car('BMW','Orange',300,4,400000)
car.sellCar("Duke Lester")

console.log(Car.prototype)
//Use the prototype to add properties to the object using the constructor
Car.prototype.plateNumber = 'KBV 345K'
console.log(car.plateNumber)
//add a method to the constructor using the prototype

Car.prototype.wantToBuy = function(){
    console.log(" I am selling the car today")
}
car.wantToBuy()