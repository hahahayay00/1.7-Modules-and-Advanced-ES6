## **Simple Budget Checker**

Managing a budget is an essential skill, whether you’re planning your meals, a trip, or even a project. In this lesson, we’ll create a simple program to check if the cost of a meal is within a set budget. You’ll also get to use the **ternary operator**, a concise way to apply conditional logic.

### **Steps**

### 1. Set Up the Meal Cost and Budget

Let’s start by defining the cost of the meal and the budget. We’ll set the budget at $15 and take the meal cost as input from the user using the `prompt()` function.

```js
const budget = 15;
const mealCost = parseFloat(prompt("Enter the cost of your meal:"));
```

### 2. Apply the Ternary Operator

Now that we have the meal cost, we can use a ternary operator to check if the meal cost is within budget. The ternary operator allows us to do a quick check in a single line of code.

```js
const message = mealCost <= budget 
    ? "You are within your budget!" 
    : "This meal exceeds your budget.";
```

- The ternary operator works like this:
  - If the condition `mealCost <= budget` is true, it returns `"You are within your budget!"`
  - Otherwise, it returns `"This meal exceeds your budget."`

### 3. Display the Result

Finally, let’s use `alert()` to show the message to the user.

```js
alert(message);
```

### **Full Code**

<details>
<summary>Full Code</summary>

```js
const budget = 15;
const mealCost = parseFloat(prompt("Enter the cost of your meal:"));
const message = mealCost <= budget 
    ? "You are within your budget!" 
    : "This meal exceeds your budget.";
alert(message);
```

</details>

### **Explanation**

- **Ternary Operator:** This operator provides a shorter and more concise way of writing an `if-else` statement. It’s perfect for situations where you only need to check one condition and return one of two possible outcomes.
- **Budget Check:** In this example, we’re checking if the cost of the meal is less than or equal to the budget. Based on the result, we display the appropriate message.

### **Important Notes**

- **Input Handling:** We use `parseFloat()` to convert the input from the `prompt()` function into a number. Always make sure to convert user inputs if you're dealing with numbers, as `prompt()` returns a string by default.
- **Ternary Operator Best Practices:** The ternary operator is great for simple conditions. However, for more complex logic with multiple conditions, you might want to use regular `if-else` statements for better readability.