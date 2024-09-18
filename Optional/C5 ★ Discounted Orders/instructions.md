### **Challenge - Discounted Orders**

In this challenge, you’ll write a program to filter out orders over $50, apply a discount to those orders, and calculate the total value of the discounted orders. You’ll use array methods like `filter()`, `map()`, and `reduce()` to solve this.

### **Scenario**

You’ll be writing a program that:

1. **Filters the orders** to find only those with a price greater than $50.
2. **Applies a 10% discount** to those filtered orders.
3. **Calculates the total value** of all the discounted orders using `reduce()`.

### **Starter Function**

```js
function calculateDiscountedOrders(orders) {
    // Define your logic here
}
```

### **Example Inputs and Outputs**

```js
// == Example 1 ==
// Input: Orders = [120, 45, 75, 30, 150]
// Output: Total value of discounted orders: 310.5

// == Example 2 ==
// Input: Orders = [60, 25, 80, 90, 10]
// Output: Total value of discounted orders: 207
```

### 🧠 **Hints**

For the best learning experience, try solving the challenge using just the requirements and understanding the inputs and outputs. Refer to the hints only if needed.

<details>
<summary>Hint 1</summary>
Use the `filter()` method to keep only the orders where the value is greater than $50.
</details>

<details>
<summary>Hint 2</summary>
Use the `map()` method to apply a 10% discount to the filtered orders.
</details>

<details>
<summary>Hint 3</summary>
Use the `reduce()` method to calculate the total value of the discounted orders.
</details>

### **Pseudocode Solution**

<details>
<summary>Pseudocode</summary>

```
1. Define a function that accepts an array of order amounts.

2. Inside the function:
    a. Use the `filter()` method to create a new array of orders where the value is greater than $50.
    b. Use the `map()` method to apply a 10% discount to each filtered order (multiply by 0.9).
    c. Use the `reduce()` method to sum up the discounted orders and get the total value.

3. Return the total value and display it using `console.log()`.
```

</details>

This challenge will give you hands-on practice with combining multiple array methods like **`filter()`**, **`map()`**, and **`reduce()`**. These methods are crucial for working efficiently with arrays in JavaScript.