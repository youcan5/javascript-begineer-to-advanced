// All string methods return a new string. They don't modify the original string.

// Formally said:

// Strings are immutable: Strings cannot be changed, only replaced.



const name = "Saikiran"
const age = 25



console.log(`My name is ${name} and my age is ${age}`)



// Length --- Finds the length of the string, Not a Function

const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
console.log(alphabets.length)

// Chart At--- Returns the character at the specified index in a string

const checkChartAt = "usernamedatafilling"

console.log(checkChartAt.charAt(5))


// CharCodeAt ---- Returns the UTF of the char at the specified index in a string

const checkChartCode = "datanameusername"

console.log(checkChartAt.charCodeAt(6))


// at() ---- Allows negative numbers to be included newly added because chartAt doesn't allow negative indexing check

const checkAt = 'replaceuser'

console.log(checkAt.at(-4),"Check AT")



// Property Acesss [] --- Access the given index from the string

const accessString = "accessingstring"

console.log(accessString[2]);



// Concat ---- Instead of + to add two string we can use concat method

let str1 = "Hello"
let str2 = "World"

console.log(str1.concat(" ",str2))



//EXTRACTING STRING PARTS HAS THREE IMPORTANT METHODS 

// SLICE(START,END)
// SUBSTRING(START,END)
// SUBSTR(START,LENGHT)

//SLICE ---- extracts part of string and return a new string with extracted part takes two things start position
// and end position
// Supports negative indexing 
const slicingString = "Apple, Bananana, Kiwi"

console.log(slicingString.slice(0,5))
console.log(slicingString.slice(4)) /// slices from the start and returns the string
console.log(slicingString.slice(-12)) /// if position is negative it starts from the end of the string
console.log(slicingString.slice(-12,-6))// returns string from the position -12 to -6




// Substring---- Extracts Characters from the string between two indexes returning a new string

// It doesn't support Negative Indexing If Negative Indexing it takes it as 0

console.log(slicingString.substring(0,5))



// substr --- It is Deprecated and not used currently




/// CONVERTING STRING TO UPPER AND LOWERCASE

// toUpperCase() ---- Converts the string to CAPITAL LETTERs
// toLowerCase() --- Converts the string to LOWER LETTERs


let uppString = "TestingCasesInString"
let testUppString = uppString.toUpperCase();
let testLowString = uppString.toLowerCase();

console.log(testUppString,"Upper String");
console.log(testLowString,"Lower String");



// TRIM ---- trim removes the whitespaces from the string 


let checkWhiteSpaces = "                 Hello             "

console.log(checkWhiteSpaces.trim())

//TRIMEND --- TRIMend removes the whitespaces only from the end of the string

console.log(checkWhiteSpaces.trimEnd())



// REPLACE ----- replaces the specified value with given value in the string

const replacetest = "navigation replace"

console.log(replacetest.replace('navigation','testing'))



// SPLIT() ---- Converts the string into the array


// | Method                   | Output Example          | Use Case                         |
// | ------------------------ | ----------------------- | -------------------------------- |
// | `str.split(" ")`         | `["Hello", "World"]`    | Split words                      |
// | `str.split("")`          | `["H","e","l","l","o"]` | Split into characters            |
// | `Array.from(str)`        | `["H","e","l","l","o"]` | Convert string to iterable array |
// | `[...str]`               | `["H","e","l","l","o"]` | Modern shorthand                 |
// | `Object.assign([], str)` | `["H","e","l","l","o"]` | Rarely used, same result         |



let stringInfo = "Banana Kiwi Mango"

console.log(stringInfo.split(" "))
console.log(stringInfo.split('|'))
console.log(stringInfo.split("-"))




//STRING SEARCHING 


// INDEX OF ---- method returns the index of the  first occurence of a string in the string , 
// if not found it return it return -1


let findIndex = "Your name is reduce and map"
console.log(findIndex.indexOf("name"))


// Last Index --- returns the last index position of the given string if not there it returns -1

let findLastIndex = "Your Name is good and going"

console.log(findLastIndex.lastIndexOf("going"))

// Search() ----- searches the string in the string and returns the position value inside the string

console.log(findLastIndex.search("Name"))


// match() ---- The match() method returns an array containing the results of matching a string against a string

console.log(findLastIndex.match("ame"))



// includes() --- The includes() method returns true if a string contains a specified value.


console.log(findLastIndex.includes("hello"))


// startsWith() --- The startsWith() method returns true if a string begins with a specified value. Otherwise it returns false


console.log(findLastIndex.startsWith("Username"))


// endsWith() ---- The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false:
console.log(findLastIndex.endsWith("Username"))
