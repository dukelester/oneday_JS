//the date and time  in JS format

const timeNow = new Date();
console.log(timeNow)

const date2 = new Date('2021')
console.log(date2)

const newDate = new Date();

const month = newDate.getMonth()
const years = newDate.getFullYear()
const hour = newDate.getHours()
const date = newDate.getDate()
console.log(month, years,hour,date)