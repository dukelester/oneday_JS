const data = [9,6,3,4,5,6,7,8,9,09]

for (a in data) {
    console.log(a)
}
//the for ..  in .. loop is a for loop with the following syntax:

/* for (key in data){
    do something
}
*/
const mySentence = 'The name is John and the last name is Doe'

for (letter in mySentence) {
    letter = mySentence[letter].toUpperCase()
    // console.log('letter'.toUpperCase())
    console.log(letter)
}

const student = {
    fullName: 'John Lester MAguire',
    age:35,
    home:'Blue Horns',
    work:'Programming'
}
//using the for ...in
for (let key in student) {
    //display all the properties in the object
    console.log(key) //the keys
    console.log(`${key} ==> ${student[key]}`);
}
//updating the values of the properties
const salaries = {
    Jack: 24000,
    Paul:34000,
    Monica:55000
}
//using the for ...in loop
for (let s in salaries) {
    //add a current simple to the salary
    let salary = "$" + salaries[s];
    //display the values

    console.log(`${s}: ${salary}`)
}

//arrays 

const data2 = [767,90,98,9,33,44,55,22,30]

for (let num in data2) {
    console.log(data2[num])
}