### **Flexible Number Cruncher**

Rest parameters allow you to represent an indefinite number of arguments as an array. This is especially useful when working with functions that take multiple arguments or when you're unsure of the number of inputs. 

In this lesson, we’ll explore how to use rest parameters and apply some useful array methods like `.map()` and `.reduce()`.

### Steps

### 1. Creating a Function with Rest Parameters

Let's start by creating a function that uses rest parameters to accept any number of arguments.

```js
function calculateSum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
```

In this example:
- The `...numbers` parameter collects all the arguments passed to the function into an array.
- We then use the `.reduce()` method to sum up all the elements in the array.

Now, test the function by calling it with different numbers:

```js
console.log(calculateSum(1, 2, 3, 4)); // Outputs: 10
console.log(calculateSum(5, 10, 15));  // Outputs: 30
```

### 2. Using Array Methods with Rest Parameters

You can also apply other array methods such as `.map()` or `.filter()` to manipulate the values in your rest parameters. For example, let's create a function that doubles all the numbers passed into it:

```js
function doubleNumbers(...numbers) {
  return numbers.map(number => number * 2);
}
```

Test the function:

```js
console.log(doubleNumbers(1, 2, 3)); // Outputs: [2, 4, 6]
console.log(doubleNumbers(4, 5, 6)); // Outputs: [8, 10, 12]
```

### 3. Combining Multiple Array Methods

Let's now combine rest parameters and several array methods in one function. We'll create a function that filters out numbers greater than 10 and then calculates their sum.

```js
function sumAboveTen(...numbers) {
  const filteredNumbers = numbers.filter(number => number > 10);
  return filteredNumbers.reduce((acc, curr) => acc + curr, 0);
}
```

Test the function:

```js
console.log(sumAboveTen(5, 12, 3, 18));  // Outputs: 30
console.log(sumAboveTen(1, 4, 11, 15));  // Outputs: 26
```

### Full Code

<details>
<summary>Full Code</summary>

```js
function calculateSum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

function doubleNumbers(...numbers) {
  return numbers.map(number => number * 2);
}

function sumAboveTen(...numbers) {
  const filteredNumbers = numbers.filter(number => number > 10);
  return filteredNumbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(calculateSum(1, 2, 3, 4));   // Outputs: 10
console.log(doubleNumbers(1, 2, 3));     // Outputs: [2, 4, 6]
console.log(sumAboveTen(5, 12, 3, 18));  // Outputs: 30
```

</details>

### Explanation

- **Rest Parameters:** The `...numbers` syntax gathers all arguments into an array. This allows us to work with them using array methods.
- **Array Methods:** We used `.reduce()` to sum up numbers, `.map()` to double values, and `.filter()` to remove numbers below a certain threshold.

### Important Notes

- **Rest parameters must always be the last parameter** in a function because it gathers all remaining arguments into an array.
- Rest parameters allow functions to handle a variable number of arguments, making them versatile and reusable.
- Combining array methods with rest parameters enables you to perform complex operations in a clean and readable way.

By mastering rest parameters, you’ll unlock more flexibility in your functions, enabling you to work with dynamic inputs efficiently!