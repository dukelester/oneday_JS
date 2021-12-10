//timing events ==> executing a code at time intervals.
//methods : 1. setInterval() and 2.setTimeout()

//the setInterval() function repeats execution of code after every period of a time interval.
//syntax is :
// setInterval(function, milliseconds); and it returns intervalId which is integer.


//display a text every 1 sec

function greetMe(){
    let myName = 'dukelester the Coder';
    console.log(`Hello Mr ${myName} how are you doing today?`);

}
setInterval(greetMe, 100000);

//display time after 10 secs.

function showTime(){
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();
    console.log(`The time is ${time} `);
}

let display = setInterval(showTime,5000);
