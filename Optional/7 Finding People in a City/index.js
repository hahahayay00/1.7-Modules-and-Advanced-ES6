// include the following line if planning to use prompt function with Node.js:
const prompt = require('prompt-sync')();
const users = [
    {name: "Alice", address:{ city: "New York"}},
    {name : "Bob"},
    {name:"Charlie",address:{city:"Los Angeles"}},
    {name:"David"},
]
const usersWithAddress = users.filter(user => user.address?.city);
const cities = usersWithAddress.map(user => user.address?.city);
console.log('Users with an address:', usersWithAddress);
console.log('Cities:', cities);