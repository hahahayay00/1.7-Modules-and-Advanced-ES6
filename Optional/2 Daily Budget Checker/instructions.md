## **Daily Budget Checker**

Building on the simple budget checker, let’s take it up a notch and create a **Daily Budget Checker**. In this lesson, you’ll use **ternary operators**, **function parameters**, and **destructuring array values** to determine whether the total cost of your meals for the day stays within your budget.

### **Steps**

### 1. Define the Function and Set Up Parameters

We’ll start by creating a function named `checkDailyBudget`. This function will accept two parameters:
1. **An array of meal costs** for the day.
2. **A daily budget**.

Inside the function, we will **destructure** the array to extract each meal cost.

```js
function checkDailyBudget([breakfast, lunch, dinner], budget) {
    // Destructuring the meal costs from the array
}
```

### 2. Calculate the Total Cost

Next, we’ll calculate the total cost of the meals by adding up the breakfast, lunch, and dinner costs.

```js
const totalCost = breakfast + lunch + dinner;
```

### 3. Apply the Ternary Operator to Check the Budget

We’ll use the ternary operator to check if the total cost of the meals is within the daily budget.

```js
const message = totalCost <= budget 
    ? "You stayed within your daily budget!" 
    : "You exceeded your daily budget!";
```

### 4. Display the Result

Finally, we’ll log the result using `console.log()`.

```js
console.log(message);
```

### **Putting It All Together**

Here’s the full implementation:

<details>
<summary>Full Code</summary>

```js
function checkDailyBudget([breakfast, lunch, dinner], budget) {
    // Calculate the total cost of all meals
    const totalCost = breakfast + lunch + dinner;

    // Check if the total cost is within the budget using ternary operator
    const message = totalCost <= budget 
        ? "You stayed within your daily budget!" 
        : "You exceeded your daily budget!";

    // Return the message
    console.log(message);
}

// Example usage:
const meals = [5, 10, 7]; // Breakfast, Lunch, and Dinner costs
const dailyBudget = 25;

checkDailyBudget(meals, dailyBudget);
```

</details>

### **Explanation**

- **Function Parameters and Destructuring:** The function `checkDailyBudget` takes in two parameters—an array of meal costs and the budget. We use **array destructuring** to pull out the costs for breakfast, lunch, and dinner from the array.
- **Ternary Operator:** Once the total cost is calculated, we use the ternary operator to check whether the total is within the budget. The message is based on the result of this check.

### **Important Notes**

- **Destructuring Arrays:** Destructuring allows us to extract values from arrays and objects. In this case, we destructure the `meals` array to get individual meal costs.
- **Function Parameters:** Functions can accept arrays, and destructuring the array inside the function helps make the code cleaner and more readable.
- **Ternary Operators:** Ternary operators are great for concise checks, but for more complex logic, regular `if-else` statements may be clearer.
