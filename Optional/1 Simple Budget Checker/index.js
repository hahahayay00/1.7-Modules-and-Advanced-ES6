// include the following line if planning to use prompt function with Node.js:
const prompt = require('prompt-sync')();
const budget = 15;
const mealCost = parseFloat(prompt("Enter the cost of your meal:"));
const message = mealCost <= budget 
    ? "You are within your budget!" 
    : "This meal exceeds your budget.";
    console.log(message);