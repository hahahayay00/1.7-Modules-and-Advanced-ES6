// include the following line if planning to use prompt function with Node.js:
// const prompt = require('prompt-sync')();
const userProfile ={
    name:"John",
    age:25,
    hobbies:["Reading","Gaming"]
}
function updateProfile({name,age,hobbies}, ...newHobbies){
    const updatedHobbies = [...hobbies,...newHobbies]

    return`${name}'s profile updated! Hobbies: ${updatedHobbies}`
}
    console.log(updateProfile(userProfile, "Swimming,Hiking"));
    console.log(updateProfile(userProfile, "Photography,Travelling"));
