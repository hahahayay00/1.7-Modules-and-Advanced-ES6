### **Challenge - Chaining Methods: Filter, Map, and Reduce on Transactions**

In this challenge, you’ll write a program that chains multiple array methods—`filter()`, `map()`, and `reduce()`—to calculate the total amount of deposits from an array of transactions. Your goal is to focus on filtering, mapping, and reducing to process data efficiently.

### **Scenario**

You’ll be writing a program that:

1. **Takes an array of transactions**, each containing an `amount` and a `type` (either 'deposit' or 'withdrawal').
2. **Filters the transactions** to only include deposits.
3. **Maps the deposits** to their amounts.
4. **Reduces the deposit amounts** to calculate the total deposit value.

### **Starter Code**

```js
const transactions = [
  { amount: 200, type: 'deposit' },
  { amount: 100, type: 'withdrawal' },
  { amount: 300, type: 'deposit' },
  { amount: 150, type: 'withdrawal' },
];

function calculateTotalDeposits(transactions) {
    // Your logic here
}
```

### **Example Inputs and Outputs**

```js
// == Example 1 ==
// Input: [{ amount: 200, type: 'deposit' }, { amount: 100, type: 'withdrawal' }, { amount: 300, type: 'deposit' }]
// Output: "Total deposits: $500"

// == Example 2 ==
// Input: [{ amount: 100, type: 'withdrawal' }, { amount: 50, type: 'withdrawal' }, { amount: 150, type: 'deposit' }]
// Output: "Total deposits: $150"
```

### 🧠 **Hints**

For the best learning experience, try solving the challenge using just the requirements and understanding the inputs and outputs. Refer to the hints only if needed.

<details>
<summary>Hint 1</summary>
Use the `filter()` method to select only transactions with the type 'deposit'.
</details>

<details>
<summary>Hint 2</summary>
Once you have filtered the deposits, use the `map()` method to extract the `amount` of each deposit.
</details>

<details>
<summary>Hint 3</summary>
Use the `reduce()` method to sum up the values of the deposit amounts.
</details>

### **Pseudocode Solution**

<details>
<summary>Pseudocode</summary>

```
1. Use filter() to select transactions with type 'deposit'.
2. Use map() to extract the amount from each deposit.
3. Use reduce() to sum up the deposit amounts.
4. Return the total amount of deposits.
```

</details>

This challenge will help you practice chaining array methods and give you experience with common JavaScript techniques used to process data efficiently.