//use tha async keyword to represent that a function is asynchronous. An async function returns a promise.
//syntax:
async function myFunction(param1,param2, ...paraN) {
    //statements
}

//example

async function grade(){
    console.log('This is an async function!');
    return Promise.resolve(1)
}

grade().then(function (result) {
    console.log('This is an async function chanined  ' + result);
})

//await keyword:
//used inside the async function to wait for asynchronous operation.
//syntax

// let result = await promise;
//example


//a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promise Resolved Successfully');
    }, 5000);
});

//async function

async function asyncFunc(){

    //wait until the promise resolves.
    let result = await promise;
    console.log(result);
    console.log('Hello duke and async')
}

//calling the async function

asyncFunc();