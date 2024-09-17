## **Simple Budget Checker Using the Ternary Operator**

In this lesson, you’ll learn how to use a ternary operator to check whether you are within your daily budget based on your spending for the day. This exercise will help you get familiar with JavaScript’s ternary operator, which allows you to write concise conditional statements.

### **Steps**

### 1. Define the Problem

Imagine you have a budget for the day, say $100. Throughout the day, you spend money on different items like food, transport, and entertainment. You need a simple way to check whether you're still within the budget.

```js
// Define your daily budget
const dailyBudget = 100;
```

### 2. Track Your Expenses

Let’s assume you’ve spent a certain amount on different items. We will store the total expenses in a variable.

```js
// Example expenses
const food = 30;
const transport = 20;
const entertainment = 40;

// Total expenses
const totalSpent = food + transport + entertainment;
```

### 3. Use the Ternary Operator to Check the Budget

Now that you have your total expenses, use the ternary operator to check if you're within your daily budget or over it.

```js
// Ternary operator to check if you're within the budget
const budgetStatus = totalSpent <= dailyBudget
  ? "You're within your budget."
  : "You've exceeded your budget!";
```

### 4. Display the Result

Finally, let's display the result to check if you've managed your expenses well.

```js
console.log(budgetStatus);
```

### **Full Code**

<details>
<summary>Full Code</summary>

```js
// Define the daily budget
const dailyBudget = 100;

// Expenses
const food = 30;
const transport = 20;
const entertainment = 40;

// Total expenses
const totalSpent = food + transport + entertainment;

// Check budget using ternary operator
const budgetStatus = totalSpent <= dailyBudget
  ? "You're within your budget."
  : "You've exceeded your budget!";

// Display the result
console.log(budgetStatus);
```

</details>

### **Explanation**

- **Ternary Operator:** The ternary operator is a shorthand for writing `if-else` statements in a more concise way. In this case, it checks whether the total spent is less than or equal to the daily budget. If true, it returns a message saying you are within your budget; otherwise, it says you’ve exceeded it.
  
- **Tracking Expenses:** By storing each expense in a variable, you can easily modify the values and check different budget scenarios. This makes your code flexible and reusable.

### **Important Notes**

- **Ternary Operator Usage:** The ternary operator is ideal for simple conditions like this. For more complex logic, it's better to use regular `if-else` statements.
  
- **Test with Different Expenses:** Try changing the values of the expenses (e.g., food, transport, etc.) and see how the budget status changes. This will give you a better understanding of how the ternary operator works.

This simple budget checker is a great way to practice using the ternary operator while solving a real-world problem. You can expand this concept by adding more features like tracking weekly or monthly expenses!