### **Finding People in a City**

In this lesson, you’ll explore how to use **optional chaining (`?.`)** along with array methods like **`filter()`** and **`map()`** to safely access nested properties and manipulate arrays. This is particularly useful when working with complex data structures where some properties or methods may be `undefined`.

Let’s see how optional chaining can prevent errors and help us work more efficiently with array methods.

### Steps

### 1. **Create an Array of User Objects**

Start by creating an array of user objects, each containing the user's `name` and an optional `address` property. Some users will not have an `address` field.

```js
const users = [
  { name: "Alice", address: { city: "New York" } },
  { name: "Bob" },
  { name: "Charlie", address: { city: "Los Angeles" } },
  { name: "David" },
];
```

### 2. **Use `filter()` to Find Users with an Address**

Use the **`filter()`** method to create a new array of users who have an `address`. Use **optional chaining** (`?.`) to check whether each user has an `address` property.

```js
const usersWithAddress = users.filter(user => user.address?.city);
```

### 3. **Use `map()` to Extract the Cities of Users with an Address**

Now, use the **`map()`** method to create a new array containing the `city` of each user who has an address. Again, use **optional chaining** to safely access the `city` property.

```js
const cities = usersWithAddress.map(user => user.address?.city);
```

### 4. **Display the Results**

Use `console.log()` to display the filtered users and the list of cities.

```js
console.log('Users with an address:', usersWithAddress);
console.log('Cities:', cities);
```

### Full Code

<details>
<summary>Full Code</summary>

```js
const users = [
  { name: "Alice", address: { city: "New York" } },
  { name: "Bob" },
  { name: "Charlie", address: { city: "Los Angeles" } },
  { name: "David" },
];

const usersWithAddress = users.filter(user => user.address?.city);
const cities = usersWithAddress.map(user => user.address?.city);

console.log('Users with an address:', usersWithAddress);
console.log('Cities:', cities);
```

</details>

### Explanation

- **Optional Chaining (`?.`)**: The optional chaining operator (`?.`) is used to safely access properties or methods that may not exist. In this case, it’s used to check if the `address` and `city` properties exist on each user object. If they don’t, `undefined` is returned instead of throwing an error.

- **`filter()`**: The `filter()` method creates a new array by checking a condition for each element in the original array. In this example, it filters users who have an `address`.

- **`map()`**: The `map()` method is used to create a new array by transforming each element of the original array. Here, it extracts the `city` property from each user who has an address.

### Important Notes

- **Optional Chaining in Arrays**: Optional chaining is especially useful when working with arrays of objects that may have missing or optional properties, preventing runtime errors.

- **Combining `filter()` and `map()`**: Using `filter()` to first narrow down the array and then `map()` to extract specific values is a common and powerful pattern in JavaScript.

By combining **optional chaining** with array methods like **`filter()`** and **`map()`**, you can safely and efficiently work with complex or incomplete data structures. This approach helps you avoid errors and write cleaner, more readable code.