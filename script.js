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


// ****** While Loop / Do Loop
// while loops will continue to execute code while the condition is true until the condition is false. 
// Do Loops allow you to check the condition after the code is executed rather than before

let incre = 0
let decre = 3

while (incre < 3) {
    console.log('a while loop')
    incre = incre + 1
}

do {
    console.log('a do loop')
    decre = decre - 1
} while (decre > 0)



// ****** For Loop
// for loops have the following expressions: for (initialization; condition; increment/decrement) {}
// initialize the variable, set the condition of running the loop, the increment/decrement is optional
for (let i = 0; i < 4; i++) {
    console.log('hi')
}

const hendrick = [5, 9, 24, 48]

for (let i = 0; i < hendrick.length; i++) {
    console.log(hendrick[i])
}
// OR
const penske = [2, 12, 21, 22]

for (let value of penske) {
    console.log(value)
}

// for loops (first case) can be useful when needing to access the index directly (e.g., using i + 1), updating the values
// for...of loops (second case) useful when you just need display or iterate through the values. You can even iterate any iterable object, like a strings (e.g., "hello")

// ****** Objects
// JSON = Javascript Object Notation (plain text for storing and transporting data, similar to js object syntax)
vocab.push('JSON', 'iterable')

// objects are packages of property-value pairs that are used together.
// objects are within set of braces. They have properties (aka 'keys') associated with values

const obj = {
    make: 'honda',
    model: "civic",
    year: 2009,

    //functions can be in objects
    start: function() {
        return 'You just fired up the car'
    }, 

    //objects can be in objects
    repairDate: {
        oilChange: '05 May 2025',
        batteryReplacement: '23 September 2022'
    }
}

// accessing properties of the object:
// Dot Notation
obj.make
obj.start() //calling the function
obj.repairDate.oilChange // calling a property in the object that is in the object

obj.model = 'accord' // reassigning property

// creating new properties by referencing the object and the new prop name
obj.owners = ['cody', 'bethany']

// Bracket Notation 
obj['model'] //notice the property is in quotations

// you can delete a property by using the delete keyword then referencing the property:
// delete obj.year

// to loop through the property-value pairs in an object:
Object.keys(obj)
Object.values(obj)

for (let key in obj) {
    console.log(key)
}
// note: in the above for loop, you use 'in' when looping through an object and 'of' when looping through something iterable like an array

// you can combine objects by using the spread operator. For example:
// const obj3 = {...obj, ...obj2}

// destructing objects:
const { make, year } = obj

console.log(make, year)


// ****** Sets
// sets (which are js objects) are a collection of unique values of any type. Sets enforces that only unique values are added and any attempt to add a duplicate value would be ignored. 
// sets do not contain key-value pairs, they only contain the values (therefore, you can not access values by referencing a key or index). you access values by using the 'has()' method.
// Use cases: filtering duplicate ID's or storing a list 
const mySet = new Set([1, 2, 3]);
mySet.add(1)
mySet.delete(1)
mySet.has(1)
mySet.size

for (const value of mySet) {
    console.log(value)
}

mySet.clear()

// if you have a set and want to convert it to an array:
const arraySet = Array.from(mySet)
// OR
const arraySet2 = [...mySet]

// ****** Maps
const myMap = new Map();
const numMap = new Map([[48, "Jimmie Johnson"], [11, "Denny Hamlin"]])

// To add something to the map. Notice it doesn't have brackets.
numMap.set(24, 'Jeff Gordon')
// To delete something from the map. You can just use the key.
numMap.delete(11)
// To get the value of the key entered. 
numMap.get(48)
// To check if a value exists (returns boolean)
numMap.has(11)
// To check the size of the map
numMap.size
// To loop through the map
    // note: if you want just key or value specify when initializing (e.g. const key of numMap.keys)
for (const [key, value] of numMap) {
    console.log(value + " drives car #" + key)
}

const carArr = Array.from(numMap)

// to clear or delete all key-value pairs in the map
myMap.clear()


// ****** Error Handling
try {
    riskyFunction();
} catch (error) { // not required to add a variable , only if you want to see what the error is
    console.error("An error occured:", error.message)
} finally {
    console.log("Cleanup code can go here"); // always runs
}

// if you want to generate your own execptions:
// throw new Error('this is not good!')

vocab.push('error handling')


// ****** Functions
    // you can add as many parameters as you want, and you can set a default value. 
function greet(name, age=12) {
    console.log(`welcome ${name}, you are age ${age}`)
}
// OR
const hello = function(name) {
    console.log('hello ' + name)
}

// arrow function
const goodbye = (name) => {
    console.log('goodbye ' + name)
}
// OR

const talkLater = (name) => console.log(`talk later, ${name}`)

greet('lucy')
greet('jack', 21)
hello('jill')
goodbye('parker')
talkLater('sue')

vocab.push('rest parameters')
// Rest Parameters = allow a function to accept an indefinate number of arguments as an array

function addNums(...numbers) {
    return [1, 2 ]
}

// .map function
    // applys a function to every element inside an array and gives you a new arrow with the result of that function
const numbers = [1, 2, 3, 4]
const doubled = numbers.map((num) => num * 2)
console.log(doubled)

const drivers = [
    {name: 'Ross Chastain', carNum: 1},
    {name: 'Austin Cindric', carNum: 2},
    {name: 'Austin Dillon', carNum: 3}
]

const driverNames = drivers.map((driver) => driver.name)
console.log(driverNames)

// .reduce function
    // take an array and deduce it to a single value
    // usually when you want to sum but can also be used for concat
    // parameters: accumulator = the accumulator number that is being added to the number = that is being used to add to the accumulator. The 0 integer is what the accumulator starts at.  
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0)
console.log(sum)

// .filter function
    // will filter out values from an array based on certain criteria 
    // needs to return a boolean or truthy or falsey values 

const numArray = [4, 283, 3920, 434, 23, 59, 100, 203939]
const oddNumbers = numArray.filter(num => num % 2 != 0)
console.log(oddNumbers)

// ****** 'this' keyword
    // you will be unable to use the this keyword inside an arrow function

// this will work. with the normal function 'this' is defined when you call a function
const person = {
    name: 'Lucy',
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
}

// this will not work. arrow functions inherit 'this' at the time it is defined, not when it is called. It is looking in the global scope for a this.name. if it was inside the function it would inherit it from the function scope
const person2 = { 
    name: 'Joe',
    greet: () => {
        console.log(`Hello, my name is ${this.name}`);
    }
}

person.greet()
person2.greet()

vocab.push('scope')


// ****** Promises
    // promise is an object that respresents the eventual completion or failure of an asynchronous operation.
    // promises are used when you don't know how long something will take to complete (e.g., file operations like reading or writing to disk, sending network request, API requests)
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    if (true) {
        resolve('good'); // Fulfill the promise
    } else {
        reject('bad'); // Reject the promise
    }
});

// .then is used for when the promise is resolved, it will then do the following. the resolve parameter above is, esentially equal to the function that we pass in .then
// .catch is used for when the promise is rejected.
// .finally is option and will happen whether the promise is resolved or rejected
myPromise.then((value) => {
    console.log(value)
}).catch((value) => {
    console.log(value)
}).finally(() => {
    console.log('I will always be here')
})

vocab.push('promises')