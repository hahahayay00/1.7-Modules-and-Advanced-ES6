### **Challenge - Filter Products with Specific Characteristics**

In this challenge, you’ll create a program to filter products based on specific characteristics such as price and category. You'll focus on the filtering logic to return products that meet the specified conditions.

### **Scenario**

You’ll be writing a program that:

1. **Takes an array of products**, each with properties like `name`, `price`, and `category`.
2. **Uses the `filter()` method** to find products where:
   - The price is greater than a specified minimum value.
   - The category matches a given category.
3. **Returns the filtered array** of products.

### **Starter Code**

```js
const products = [
  { name: "Phone", price: 500, category: "electronics" },
  { name: "Shoes", price: 80, category: "fashion" },
  { name: "TV", price: 300, category: "electronics" },
  { name: "Laptop", price: 1000, category: "electronics" },
  { name: "T-shirt", price: 30, category: "fashion" }
];

function filterProductsByPriceAndCategory(minPrice, category) {
  // Your filtering logic goes here
}
```

### **Example Inputs and Outputs**

```js
// == Example 1 ==
// Input: minPrice = 100, category = "electronics"
// Output: [{ name: "Phone", price: 500, category: "electronics" }, { name: "TV", price: 300, category: "electronics" }]

// == Example 2 ==
// Input: minPrice = 50, category = "fashion"
// Output: [{ name: "Shoes", price: 80, category: "fashion" }]
```

### 🧠 **Hints**

For the best learning experience, try solving the challenge using just the requirements and understanding the inputs and outputs. Refer to the hints only if needed.

<details>
<summary>Hint 1</summary>
Use the `filter()` method to return products that satisfy both the price and category conditions.
</details>

<details>
<summary>Hint 2</summary>
In the `filter()` callback function, check if both the `price` is greater than the minimum value and if the `category` matches the provided category.
</details>

<details>
<summary>Hint 3</summary>
Ensure the filtered array contains only the products that meet both conditions before returning it.
</details>

### **Pseudocode Solution**

<details>
<summary>Pseudocode</summary>

```
1. Use filter() on the products array.
2. Inside the filter callback:
   a. Check if the product's price is greater than minPrice.
   b. Check if the product's category matches the given category.
3. Return the filtered array of products that meet both conditions.
```

</details>

This challenge will help sharpen your filtering logic skills in JavaScript and give you hands-on experience with handling arrays of objects.