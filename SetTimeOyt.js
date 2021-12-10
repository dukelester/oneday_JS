//used to execute a code or a function after a period of time 
//setTimeout(function, millisceconds)

function myName(){
    console.log("Hello Duke Lester");
}

//set the timeout
setTimeout(myName, 3000) // only show the code after 3 seconds
console.log("This comes first")

function showTime(){
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();

    console.log(time);

    //setTimeout(showTime,3000)
}

showTime();

let count = 0;
function increaseCount(){
    count += 1;
    console.log(count);
}

let id = setTimeout(increaseCount,3000);
//clearTimeout(id);
clearTimeout(id);
console.log('set timeout has stopped')