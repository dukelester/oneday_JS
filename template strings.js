//they allow one to use the strings or embedded expressions in the form of a string.They are enclosed in the backTicks ``
//example::

const product = 'pinapples';
const years = 20;

console.log(`I have been bying the ${product} for the past ${years} years from the market for consumption`);
const message = `I have been bying 
the pinapples for the past 20 years 
from the market for
 consumption`
 console.log(message);

 const price = 200;
 const quantity = 20;
 const item ='shirts';
 console.log(`I have bought ${quantity} ${item} at ${price} and the total
  amount is Kes ${price * quantity}`); //this is interpolation

function naming(yourName){ //a tag function
    console.log(yourName);
}

const greetings = naming`Jannifer`
console.log(greetings)