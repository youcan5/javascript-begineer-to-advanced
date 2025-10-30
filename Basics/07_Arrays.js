// Array ---- Collection of multiple items in a single variable name 
// can be resizable
// are not associative arrays cannot be accessed using non negative elements 

const myArr = [0,1,2,3,4,5]

console.log(myArr,"My Array")


const newArr = new Array(1,2,3,4,5)
console.log(newArr,"New Array")


//Push Method add values to the array

myArr.push(6)
myArr.push(7)

console.log(myArr,"Push")

// POP pops the last element of the array

myArr.pop()

console.log(myArr,"Pop")

// Unshift adds the element at the start of the array

myArr.unshift(9)
console.log(myArr,"Unshift")

// shift removes the first element of the array

myArr.shift()
console.log(myArr,"Shift");


// Includes and IndexOf gives us the boolean kind of thing ok 

// JOIN converts our array into the string

const testArr = myArr.join()
console.log(testArr,"New Array")



// Slice method in Array gives the slices elements but do not manipulate or change the array

const testingArr = [0,1,2,3,4,5,6,7,8]

const sliceArr = testingArr.slice(0,1)

console.log(testingArr,"actual Array")
console.log(sliceArr,"Sliced Array")



// Splice manipulates the array changes it completely and gives us the new array with spliced things ok

const spliceArr = testingArr.splice(0,3)
console.log(spliceArr,"Spliced Array")

console.log(testingArr,"Testing Arrray")




const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// By doing this above thing it gives us array inside array ok

// console.log(marvel_heros,"Marvel Heroes")

// By doing push and concat we get the same thing which is array inside array ok 


// Spread operator is used by ... and we can combine two arrays to merge into single using it

const all_heroes = [...dc_heros,...marvel_heros]
console.log(all_heroes,"All Heros")


// Flat returns a new array with all sub-array elements

const another = [1,2,3,[4,5,6],7,[9,10,11]]

const real_another_array = another.flat();

console.log(real_another_array,"Real Another")




// to check array  we use isArray returns true or false

console.log(Array.isArray("Hitesh"))

// to convert into array directly anything we can use Array.from()

console.log(Array.from("Hitesh"))

// we cannot directly convert object to array using from ok it returns []

console.log(Array.from({id:1}))


// Array.of converts variables anything into the array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))


