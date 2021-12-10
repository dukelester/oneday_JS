//Javasceipt Object notation.
//Text based data format used to store and transfer data  in key/value pair. The syntax resembles the javascript object.
//The JSON can be accesed and created by other programming languages.

let data = {
    "name":"john", //The key requires double quotes.
    'age':76,
    'location':'juja'
}

console.log(typeof (data))
console.log(data)

//it can not contain functions 
//use the dota notation to access the Json data or the square brackets

console.log(data.name, data.age, data.location)
console.log(data['name'], data['age'], data['location'])

//convert the JSON data to object. using the JSON.parse() method.
const jsonData = '{"name":"john","age":"76","location":"ju"}';
const obj = JSON.parse(jsonData);
console.log(obj.name, obj.age)

//convert an object to JSON data ==> use the JSON.stringfy() method.

const dataObj = {"name":"john","age":"76","location":"ju"}
const jsonData2 = JSON.stringify(dataObj);

console.log(jsonData2)