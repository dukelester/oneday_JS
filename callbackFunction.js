//a callback function is a function passed to another function as an argument to that function.

function user(username) {
    console.log('welcome user ' + username)
}
user('dukelester4')

//callback function:

function testUser(userName, callback) {
    console.log('test user ' + userName);
    callback(21);
}
//callback function:
function myCallback(radius){
    let area = radius * radius * 3.142;
    console.log(`Hi Lester, this is the callback function! with area of ${area}`);
}
//pass the function as an argument.

testUser('dukelester45', myCallback);



function greet(userName1, myFunction){
    console.log('This is very awesome!!');

    //callback function 
    myFunction(userName1);
}
function sayName(userName1){
    console.log('Hello ' + ' ' + userName1);
}

//call the function aftert 2 secs

setTimeout(greet, 10000,'Duke Lester',sayName);