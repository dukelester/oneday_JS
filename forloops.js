//sum of 100000 numbers 

let sum = 0; //initial sum
const numbers = 1000000;

for (number=1;number<=numbers;number++){
    if (number % 2 === 0)
        sum+=number;
}
console.log('The sum of even numbers btn 1-1000000 numbers is ' + sum);


let result = 1;
const myNums = 30;

for (num=1; num<=myNums;num++){
    result *= num
}
console.log('Multiplication of 30000 numbers ' + result);