### **Challenge - Transforming Product Prices**

In this challenge, you’ll create a program that increases the prices of products by 10%. You’ll practice using array methods to manipulate and transform the product prices.

### **Scenario**

You’ll be writing a program that:

1. **Takes an array of product objects** where each object has a `name` and `price` property.
2. **Uses array methods** to increase each product's price by 10%.
3. **Returns a new array** with the updated product prices.

### **Starter Function**

```js
function increaseProductPrices(products) {
    // Define your logic here
}
```

### **Example Inputs and Outputs**

```js
// == Example 1 ==
// Input: Products = [{name: "Laptop", price: 1000}, {name: "Phone", price: 600}, {name: "Tablet", price: 300}]
// Output: [{name: "Laptop", price: 1100}, {name: "Phone", price: 660}, {name: "Tablet", price: 330}]

// == Example 2 ==
// Input: Products = [{name: "Headphones", price: 200}, {name: "Mouse", price: 50}]
// Output: [{name: "Headphones", price: 220}, {name: "Mouse", price: 55}]
```

### 🧠 **Hints**

For the best learning experience, try solving the challenge using just the requirements and understanding the inputs and outputs. Refer to the hints only if needed.

<details>
<summary>Hint 1</summary>
Use the `map()` method to create a new array with updated prices.
</details>

<details>
<summary>Hint 2</summary>
To increase the price, multiply the current price by 1.1 (which represents a 10% increase).
</details>

<details>
<summary>Hint 3</summary>
Return the new array of products with updated prices.
</details>

### **Pseudocode Solution**

<details>
<summary>Pseudocode</summary>

```
1. Define a function that accepts an array of product objects.

2. Inside the function:
    a. Use the `map()` method to create a new array by iterating over each product.
    b. For each product, multiply its price by 1.1 to increase it by 10%.
    c. Return the new array with updated product prices.

3. Display the result using `console.log()`.
```

</details>

This challenge will help you practice using array transformation methods, like **`map()`**, while working with **object properties**. It’s a common task when dealing with data in JavaScript.