// include the following line if planning to use prompt function with Node.js:
const prompt = require('prompt-sync')();
function calculateSum(...numbers){
    return numbers.reduce((acc,curr) => acc+curr,0);
}
function doubleNumbers(...numbers)
    {
        return numbers.map(number => number*2);
}
function sumAboveTen(...numbers){
    const filteredNumbers = numbers.filter(number => number > 10);
    return filteredNumbers.reduce((acc,curr)=> acc + curr,0)
}
console.log(calculateSum(1,2,3,4));
console.log(doubleNumbers(1,2,3,4));
console.log(sumAboveTen(5,12,3,18));
