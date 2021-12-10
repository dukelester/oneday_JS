//map is smilar to objects in JS nand allows ust to store elements in a Key:value pair.
//the elements in a map are inserted in an insertion order. A map can contain objects, functions, arrays and other data as KEYS

//creating a map in JS:

const map1 = new Map(); //empty map
console.log(map1)
//insert item into a map 
//insert key-value pair
// map1.set(key1, value1)
map1.set('data',{fullName:'John Doe', age:30, location:'USA'});
console.log(map1)

const map2 = new Map(); //empty map
let obj ={};
let obj2 = {info:'forn'};
map2.set(obj, {fullName:'John Doe', age:30, location:'USA'});
console.log(map2)

//access the elements using the get() method 
console.log(map1.get('data'))

//check map elements:==>has() is used to check for map elementsif they exist in the map

console.log(map2.has('lester'));

console.log(map2.has(obj));

//removing elements from the map ==> use clear () and delete() methods.
map2.delete(obj)
console.log(map2)

//the clear() method removes all the keys from the map.

map2.clear()
console.log(map2)

//get the size of the map using size attribute.
console.log(map2.size)
console.log(map1.size)

//iterate through a map. use the for ..of .. or the for .. each..
for (let [key, value] of map1){
    console.log(key + ": " + value)
}

//map.keys() returns the keys of the map while the map.values() returns the values of the map
//use the map.entries() function to iterate throug the pair keys/values

for (let element of map1.entries()){
    console.log(element[0], element[1])
}