### **Merge 2 Shopping Lists**

In this lesson, you'll learn how to merge two arrays using the **spread operator**. The spread operator allows you to expand an array and combine it with another array. This is useful when you want to combine lists or arrays without modifying the original ones.

Let's apply this concept by merging two shopping lists.

### Steps

### 1. **Define Two Shopping Lists**

Start by creating two arrays, each representing a shopping list. One will contain groceries, and the other will contain household items.

```js
const groceryList = ['Milk', 'Eggs', 'Bread', 'Butter'];
const householdItems = ['Toilet Paper', 'Soap', 'Shampoo', 'Detergent'];
```

### 2. **Merge the Two Lists Using the Spread Operator**

Now, let's merge the two arrays into a single shopping list using the spread operator `...`.

```js
const combinedList = [...groceryList, ...householdItems];
```

Here, the spread operator expands both arrays and combines them into one.

### 3. **Display the Combined List**

Use `console.log()` to display the new combined list.

```js
console.log('Combined Shopping List:', combinedList);
```

The output will be a new array that contains all the items from both the grocery list and the household items list.

### Full Code

<details>
<summary>Full Code</summary>

```js
const groceryList = ['Milk', 'Eggs', 'Bread', 'Butter'];
const householdItems = ['Toilet Paper', 'Soap', 'Shampoo', 'Detergent'];

const combinedList = [...groceryList, ...householdItems];

console.log('Combined Shopping List:', combinedList);
```

</details>

### Explanation

- **Spread Operator (`...`)**: The spread operator is used to "spread out" the elements of an array. When used inside another array, it effectively merges the contents of both arrays without modifying the original arrays.
  
- **New Array**: The `combinedList` is a new array that contains all the items from `groceryList` and `householdItems`.

### Important Notes

- **Immutability**: The original `groceryList` and `householdItems` arrays are not modified by using the spread operator. Instead, a new array (`combinedList`) is created, which is a combination of both.
  
- **Order of Arrays**: The order in which you spread the arrays matters. In this case, the `groceryList` items come first, followed by the `householdItems`.

This lesson demonstrates how simple it is to combine arrays with the spread operator, which can be extremely useful in real-world applications like merging shopping lists, product lists, or other data sets.