//similar to aarays but do not store duplicate values for data 
//set = new Set() ==> Creating a set 
const set1 = new Set([0,7,25678,22,3,4,5,6,7,8,9,10,11,12,13,14,15])
console.log(set1)
//has() ==> check if the set has an element
//values () ==> the elements in a set

console.log(set1.has(30))
console.log(set1.has(7))
console.log(set1.values())

// to add a new element to the set use the add() method
set1.add(800)
console.log(set1.has(800))
console.log(set1)

// removing elements :: ==> use clear() and delete() methods
set1.delete(800)
console.log(set1)

//accessing the elements in a set

for (let element of set1){
    console.log(element)
}
