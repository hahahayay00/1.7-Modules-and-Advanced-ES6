### **Challenge - Advanced Profile Updater**

In this challenge, you'll create an advanced profile updater that allows a user to update their information dynamically. You’ll practice combining a few key concepts, including object destructuring, rest parameters, and array methods.

### **Scenario**

You’ll be writing a program that:

1. **Takes user profile data** (like name, age, and hobbies) stored in an object.
2. **Uses rest parameters** to allow flexible input for additional user hobbies.
3. **Updates the profile** by adding the new hobbies to the existing ones.

### **Starter Code**

```js
const userProfile = {
    name: "John",
    age: 25,
    hobbies: ["Reading", "Gaming"]
};

function updateProfile({name, age, hobbies}, ...newHobbies) {
    // Define your logic here
}
```

### **Example Inputs and Outputs**

```js
// == Example 1 ==
// Input: updateProfile(userProfile, "Swimming", "Hiking");
// Output: "John's profile updated! Hobbies: Reading, Gaming, Swimming, Hiking"

// == Example 2 ==
// Input: updateProfile(userProfile, "Photography", "Traveling");
// Output: "John's profile updated! Hobbies: Reading, Gaming, Photography, Traveling"
```

### 🧠 **Hints**

For the best learning experience, try solving the challenge using just the requirements and understanding the inputs and outputs. Refer to the hints only if needed.

<details>
<summary>Hint 1</summary>
Use rest parameters to gather all new hobbies as an array.
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
1. Create a user profile object with properties (name, age, hobbies).

2. Write a function named updateProfile that:
    a. Destructures the user profile object (name, age, hobbies).
    b. Uses rest parameters to gather additional hobbies.

3. Inside the function:
    a. Add new hobbies to the existing hobbies using array methods like `.concat()` or spread.
    b. Return a message that includes the updated hobbies.

4. Return a message stating the profile has been updated and show the hobbies.
```

</details>

This exercise will help solidify your understanding of **object destructuring**, **rest parameters**, and **array methods**, giving you hands-on experience with updating dynamic data.