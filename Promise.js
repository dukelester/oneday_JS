//Promise handles asynhronous operations. Used to find out if the asynhronous operations has completed or not.
//States: 1:Pending state, 2: Fuifilled State, 3:Rejected State.
//It starts at pending state ==> process is not complete.
//Fuifilled state when the process is completed successfully.
//rejected state if an error occurs during execution.


//create a promise:
//use the Promise() constructor to create a promise.

let promise = new Promise(function(resolve, reject) {
    //do something.
});
//the constructor takes a function as na argument. The function also accepts two functions:
// resolve() and reject().
//if the promise returns successifully then the resolve() function is called. 
//and if an error occurs, then the reject() is called.

//examples.


const count = true;
let countValue = new Promise(function(resolve, reject) {
    if (count) {
        resolve("There is a count value in place")
    }
    else{
        reject('The count value does not exist.')
    }
});

console.log(countValue)

//chaining the promises

//use the methods .then(), catch() and finally()
//the then () methods is used with callBack function when the promise is fulfilled.
// promiseObject.them(onFulfilled, onRejected);
let myCount = new Promise(function(resolve, reject) {

    resolve("Promise is resolved");
});
myCount.then(function successValue(result) {
    console.log(result);
})
.then(function successValue1(){
    console.log("You can call multiple functions this way: ");
})

//the catch() method with the promise.
//used with the callback when the promise is rejected.

let myAge = new Promise(function (resolve, reject) {
    reject('The promise was rejected!')
});

myAge.then(function successValue2(result){
    console.log(result);
}).catch(function errorValue(result){
    console.log(result);
})