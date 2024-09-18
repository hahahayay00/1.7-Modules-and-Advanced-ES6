// include the following line if planning to use prompt function with Node.js:
const prompt = require('prompt-sync')();
function checkDailyBudget([breakfast, lunch, dinner], budget) {
    // Destructuring the meal costs from the array
    const totalCost = breakfast + lunch + dinner;
    const message = totalCost <= budget 
    ? "You stayed within your daily budget!" 
    : "You exceeded your daily budget!";
    console.log(message);
}
const meals = [9, 15, 17]; // Breakfast, Lunch, and Dinner costs
const dailyBudget = 50;

checkDailyBudget(meals, dailyBudget);