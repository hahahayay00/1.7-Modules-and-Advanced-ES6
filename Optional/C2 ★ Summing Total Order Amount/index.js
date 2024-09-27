// include the following line if planning to use prompt function with Node.js:

function calculateTotalOrderAmount(prices) {
    let totalAmount = 0;
    for(let i = 0; i<prices.length;i++){
        totalAmount +=prices[i]
    }
    return `The total amount is $${totalAmount}`
}
console.log(calculateTotalOrderAmount([10, 25, 40, 15])); 
// Output: "The total order amount is $90"

// Example 2
console.log(calculateTotalOrderAmount([5, 8, 12]));
// Output: "The total order amount is $25"