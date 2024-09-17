## **Default User Settings**

In many apps, you’ll encounter situations where certain user settings are either left empty or set to `null`. To handle these cases gracefully, we use the **nullish coalescing operator (`??`)** to provide default values when the actual values are `null` or `undefined`. This lesson will guide you through creating default settings for a user profile.

### **Steps**

### 1. Define the User Settings Object

Let’s start by defining an object called `userSettings`. This object will contain properties like `theme`, `fontSize`, and `notifications`. We’ll assume that some of these settings may not be provided by the user.

```js
const userSettings = {
    theme: null,
    fontSize: "large",
    notifications: undefined
};
```

### 2. Use the Nullish Coalescing Operator

The nullish coalescing operator (`??`) allows us to set default values for properties that are `null` or `undefined`. Let’s create default settings that apply when the user has not provided a value.

```js
const theme = userSettings.theme ?? "light";
const fontSize = userSettings.fontSize ?? "medium";
const notifications = userSettings.notifications ?? true;
```

- If `userSettings.theme` is `null`, the default value `"light"` will be used.
- If `userSettings.fontSize` is provided (in this case, `"large"`), it will be used.
- If `userSettings.notifications` is `undefined`, the default value `true` will be applied.

### 3. Log the Final Settings

Now, we’ll log the final settings that include the default values for any missing or `null` properties.

```js
console.log(`Theme: ${theme}`);
console.log(`Font Size: ${fontSize}`);
console.log(`Notifications: ${notifications}`);
```

### **Putting It All Together**

Here’s the full code:

<details>
<summary>Full Code</summary>

```js
const userSettings = {
    theme: null,
    fontSize: "large",
    notifications: undefined
};

// Use the nullish coalescing operator to provide default values
const theme = userSettings.theme ?? "light";
const fontSize = userSettings.fontSize ?? "medium";
const notifications = userSettings.notifications ?? true;

// Log the final settings
console.log(`Theme: ${theme}`);
console.log(`Font Size: ${fontSize}`);
console.log(`Notifications: ${notifications}`);
```

</details>

### **Explanation**

- **Nullish Coalescing Operator (`??`):** This operator returns the right-hand side value when the left-hand side is `null` or `undefined`. It’s a cleaner and safer way to assign default values compared to using the `||` operator, which would treat other falsy values (like `0`, `""`, or `false`) as needing a default.
- **Default Settings:** By using the nullish coalescing operator, you ensure that even if the user doesn’t provide a certain setting, your app will still work with default values.

### **Important Notes**

- **`??` vs `||`:** While the `||` operator also assigns default values, it treats any falsy values (`0`, `false`, `""`) as `null` or `undefined`. The `??` operator specifically checks for `null` or `undefined` without treating other falsy values as missing data.
  
- **Use Case:** This operator is particularly useful when you want to provide default values for settings, configurations, or optional parameters, ensuring that your program doesn’t break due to missing or `null` values.

You'll often encounter cases like this in real-world applications, making this concept an essential part of building reliable code.