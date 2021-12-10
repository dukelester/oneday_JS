//try ..catch..finally statements ==> used to handle exceptions .
//types of errors :
/*
syntax error, runtime errors and 
runtime erros are exceptions
handle the runtime errors using the try .. catch .. finally

try {
    body for try
}
catch(error){
    body for catch
}
*/
const numerator = 100, denominator ='a';

try {
    console.log(numerator/ denominator);
    console.log(a);
}
catch (error){
    console.log('An error caught');
    console.log('error message:' + error);
}
finally {
    console.log('Lester with Js')
}

//user defined exceptions using the throw keyword.
//syntax: throw expression

let number;
number = 90;
throw number/0;
console.log(number/0)

try{
    console.log('try')

    throw exception;
}
catch(error){
    //the body for catch
}

