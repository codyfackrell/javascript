let vocab = []

// console.log("hello", "world", 3)
// console.error("dawg...")
// console.warn("heads up bro")

vocab.push('npm')

// const v = 48

// console.log(`Jimmie is #${v}`)


// const prompt = require("prompt-sync")()

// const v = prompt("Type Something") 

// console.log(v)

// nule = when you want to set something to nothing
// undefined = when you havent assigned a value to something

// BigInt = a data type that store big integers that are not supported by the Number data type
vocab.push('BigInt', 'function-scoped', 'block-scoped')

const x = 2
const y = "6"

// ****** Type Conversions
console.log(x, y)

// Number to String
console.log(x.toString())
console.log(String(x))
console.log(x + "")

// String to Number
console.log(Number(y))
console.log(parseInt(y))
// parseInt extracts the interger from the string
// parseFloat extracts the decimal


// ****** Comparison Operators 
// == is the loose equality operator 
// === is the strict equality operator 
// != not equal to

console.log(1 === "1")
console.log(1 == "1")

console.log(3 < "1")
console.log(1 < "3")


// ****** Logical Operators 
// && is 'and'
// || is 'or'
// ! is 'not'

vocab.push('truthy', 'falsey', 'logical operators theroy')


// ****** Conditionals
// if
// else if 
// else

if (true) {
    console.log('hello world')
} else if (false) {
    console.log("dawg")
} else {
    console.log("cheese")
}

// In JS, you don't need braces if it is a single statement in the block, even if you use else:
if (false)
    console.log('hello world')
else 
    console.log('run')

// ternary condition
// ? seperates the condition and the ifTrue statement ('if')
// : seperates the ifTrue statement and the ifFalse statement ('else')
const cond = 2 < 3 ? "okay cool" : "no" 
console.log(cond)


// ****** Switch statement
// allows you to 'switch on' a particular value to check for certain cases against that value
vocab.push('switch statements')

const value = 48

switch (value) {
    case 48:
        console.log('jimmie is the goat')
        break;
    case 24:
        console.log('jeff is not the goat')
        break;
    default: 
        console.log('no convo')
        break;
}

// Examples below (copy and pasted) of the readability of if/else if statements vs. switch statement 
// switch statements are useful (in certain cases) for readability and effecient execution 

// Using if-else if
let day = 'Monday';
if (day === 'Monday') {
  console.log('Start of the week');
} else if (day === 'Tuesday') {
  console.log('Second day');
} else if (day === 'Wednesday') {
  console.log('Mid-week');
} else {
  console.log('Other day');
}

// Using switch
let daySwitch = 'Monday';
switch (daySwitch) {
  case 'Monday':
    console.log('Start of the week');
    break;
  case 'Tuesday':
    console.log('Second day');
    break;
  case 'Wednesday':
    console.log('Mid-week');
    break;
  default:
    console.log('Other day');
}

// ****** Array
const arr = [1, 2, 3, true, "hello"]

// Creating an empty array that can be dynamic 
const arr2 =  new Array(5)
    // output would be an empty array with five values

// creating an array from a given value
const arr3 = Array.from("hello")
    // output: [ 'h', 'e', 'l', 'l', 'o' ]
// There is a lot you can do with the "Array." when initializing an array

// Methods on Arrays
// .pop = removes the last item from an array
// .shift = removes the first item from an array
// .unshift = adds an item to the first index of an array
// .push = adds an item to the last index of an array 
// .indexOf = gets you the first occurance of the requested value
// .lastIndexOf = gets you the last occurance of the requested value
// .includes = checks if a value is part of an array. returns true or false. 
// .concat = joins two arrays together by creating a new array (meaning you must initialize a new array)
// .join = adds all the elements in an array into a string (include seporator, if not specified the default is a comma)
// .slice = take a portion of an array by creating a new array (params: index start, index end)
// .splice = removes elements from an array by creating a new array with the deleted elements, the orginal array has the request elements removed (params: index start, number to delete)

// array destructing 
    // destructing means to unpack values from an array. For example, if the array is [1, 2] and I want a = 1 and b = 2, destructing looks like this:
const [a, b] = [1 , 2]

vocab.push('destructing (array)', 'spread operator')

