// include the following line if planning to use prompt function with Node.js:
const prompt = require('prompt-sync')();
let a = 5;
let b = 10;

// Use array destructuring to swap the variables
[a, b] = [b, a];

console.log(`a: ${a}, b: ${b}`); // Outputs: a: 10, b: 5