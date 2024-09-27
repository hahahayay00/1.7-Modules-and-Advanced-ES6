// include the following line if planning to use prompt function with Node.js:

const transactions = [
    { amount: 200, type: 'deposit' },
    { amount: 100, type: 'withdrawal' },
    { amount: 300, type: 'deposit' },
    { amount: 150, type: 'withdrawal' },
  ];
  function calculateTotalDeposits(transactions) {
    // Your logic here
    const deposits = transactions.filter(transaction => transaction.type === "deposit")
    const amounts = deposits.map(deposit =>deposit.amount)
    const total = amounts.reduce((acc, curr) => acc + curr, 0);
    
    // Return the total discounted amount
    return total;
    
}
console.log(`Total deposits:`,calculateTotalDeposits(transactions))
    
