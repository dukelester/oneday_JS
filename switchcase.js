//Using the switch case used in decision making
/*
switch(vae=riable /expression){
    case value:
        //body the
        break;
    case value2:
        //body 2
        break;

    .
    .
    .
    .
    .
    case valueN:
        //body the
        break;

    default:
        //body
}
*/

let num = 20;

switch(num){
    case 1:
        console.log('one is the case')
        break;
    
    case 5: //
        console.log('five is the case')
        break;

    case 10: //
        console.log('ten is the case')
        break;
    case 20: //
        console.log('twenty is the case')
        break;
    
    default:
        console.log('Hello switch')
}

//a simple calculator 

let result;
//get the operator
const operator = prompt("Enter the Operator( either +, -, /, *):  ");
//have the operands
const number1 = parseFloat(prompt("Enter your first number here: "));
const nymber2 = parseFloat(prompt("Enter your second number here: "));

switch(operator) {
    case '+': 
        result = number1 + number2;
        console.log(`${number1} ${operator} ${number2} = ${result}`); 
        break;
    case '-': 
        result = number1 - number2;
        console.log(`${number1} ${operator} ${number2} = ${result}`); 
        break;

    case '*': 
        result = number1 * number2;
        console.log(`${number1} ${operator} ${number2} = ${result}`);
        break;

    case '/': 
        result = number1 / number2;
        console.log(`${number1} ${operator} ${number2} = ${result}`);
        break;

    default: 
        console.log('You must have entered a wrong operator. Please try again!');
}