### **Challenge - Advanced Profile Updater**

In this challenge, you'll create an advanced profile updater that allows a user to update their information dynamically. You’ll practice combining a few key concepts, including object destructuring, rest parameters, and array methods. 

### **Scenario**

You’ll be writing a program that:

1. **Takes user profile data** (like name, age, and hobbies) stored in an object.
2. **Uses rest parameters** to allow flexible input for additional user hobbies.
3. **Updates the profile** by adding the new hobbies to the existing ones.

### **Starter Code**

```js
function updateProfile(data) {
    // Define your logic here
}
```

### **Example Inputs and Outputs**

Provide example inputs and outputs to give students a clear idea of what to expect from their program.

```js
// == Example 1 ==
// console.log(updateProfile("John", 25, "Swimming", "Hiking"));
// Expected output: "John's profile updated! Hobbies: Swimming, Hiking"

// == Example 2 ==
// console.log(updateProfile("Alice", undefined, "Photography", "Traveling"));
// Expected output: "Alice's profile updated! Hobbies: Photography, Traveling"
```

### 🧠 **Hints**

For the best learning experience, try solving the challenge using just the requirements and understanding the inputs and outputs. Refer to the hints only if needed.

<details>
<summary>Hint 1</summary>
Use rest parameters to gather all hobbies as an array.
</details>

<details>
<summary>Hint 2</summary>
Use array methods like `.concat()` or spread syntax to add new hobbies to existing ones.
</details>

<details>
<summary>Hint 3</summary>
Remember to destructure the existing profile properties for easier access.
</details>

### **Pseudocode Solution**

<details>
<summary>Pseudocode</summary>

```
1. Create a user profile object with default properties (name, age, hobbies).

2. Write a function named updateProfile that accepts three parameters:
    a. Destructure the first two parameters (name and age).
    b. Use rest parameters to gather any additional hobbies into an array.

3. Inside the function:
    a. Add new hobbies to the existing hobbies using array methods.
    b. Update the user's name and age if provided.

4. Return a message stating that the profile has been updated and display the updated hobbies.
```

</details>

This exercise will help solidify your understanding of **object destructuring**, **rest parameters**, and **array methods**, giving you a hands-on experience in updating dynamic data.