const users=[
    {name:"Tong",gender:"female",age:19},
    {name:"Sydnie",gender:"female",age:30},
    {name:"Jing Yong",gender:"male",age:26},

]
const agesArray = users.map((user)=>{
    return user.age
})

console.log('user ages are', agesArray)

// Task 1 get all their names
const namesArray = users.map((user)=>{
    return user.name
})
console.log('user names are',namesArray)

// Task 2: get both their names and age
const namesAgeArray = users.map((user)=>{
    return {name:user.name, age:user.age}
})

console.log('user names and age are',namesAgeArray)

// Task 3: Add an if else to check if user is adult or minor
const usersWithType = users.map((user)=>{
    if(user.age >=21){
        user.type="adult"
    }else{
        user.type="minor"
    }
    return user
})
console.log('users with type are',usersWithType)

