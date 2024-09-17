### **Merge Menu Items**

In this lesson, you’ll learn how to merge two objects using **object destructuring**. This is useful when you want to combine data from multiple sources, such as merging two different menus into one complete menu for a restaurant.

Let’s explore how you can use object destructuring to combine menu items into a single object.

### Steps

### 1. **Define Two Menu Objects**

Start by creating two objects that represent two different menus: `breakfastMenu` and `lunchMenu`. Each object will contain a few menu items with their prices.

```js
const breakfastMenu = {
  pancakes: 5,
  waffles: 6,
  coffee: 3
};

const lunchMenu = {
  burger: 8,
  salad: 7,
  soda: 2
};
```

### 2. **Merge the Two Menus Using Object Destructuring**

Next, use the **spread operator** to combine both menu objects into a new object called `fullMenu`. The spread operator will copy the properties of both objects into the new object.

```js
const fullMenu = { ...breakfastMenu, ...lunchMenu };
```

### 3. **Display the Merged Menu**

Use `console.log()` to display the merged menu.

```js
console.log('Full Menu:', fullMenu);
```

The output will be a new object containing all the items from both the breakfast and lunch menus.

### Full Code

<details>
<summary>Full Code</summary>

```js
const breakfastMenu = {
  pancakes: 5,
  waffles: 6,
  coffee: 3
};

const lunchMenu = {
  burger: 8,
  salad: 7,
  soda: 2
};

const fullMenu = { ...breakfastMenu, ...lunchMenu };

console.log('Full Menu:', fullMenu);
```

</details>

### Explanation

- **Object Destructuring and Spread Operator (`...`)**: The spread operator is used here to copy the properties from the `breakfastMenu` and `lunchMenu` objects into a new object, `fullMenu`. This is a powerful tool for combining object properties without modifying the original objects.

- **Non-Destructive**: The original `breakfastMenu` and `lunchMenu` objects remain unchanged after using the spread operator. A new object, `fullMenu`, is created.

### Important Notes

- **Property Conflicts**: If both objects have a property with the same name, the last object's property (in this case, from `lunchMenu`) will overwrite the previous one.
  
- **Use Cases**: This method is useful when merging data from multiple sources or combining default settings with user preferences in real-world applications.

With object destructuring, you can efficiently merge multiple objects into one, making your code cleaner and more maintainable. 

In this example, you’ve learned how to combine two menus into a single object, but the concept applies to any scenario where merging objects is necessary.