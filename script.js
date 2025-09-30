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