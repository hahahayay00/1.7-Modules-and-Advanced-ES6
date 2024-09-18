// include the following line if planning to use prompt function with Node.js:
const prompt = require('prompt-sync')();
const groceryList = ['Milk', 'Eggs', 'Bread', 'Butter'];
const householdItems = ['Toilet Paper', 'Soap', 'Shampoo', 'Detergent'];
const combinedList = [...groceryList, ...householdItems];
console.log('Combined Shopping List:', combinedList);