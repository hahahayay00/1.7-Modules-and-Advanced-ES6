// include the following line if planning to use prompt function with Node.js:
function calculateDiscountedOrders(orders) {
    // Define your logic here
    const filteredOrder =orders.filter(order=> order > 50);
    const discountorder =filteredOrder.map((order)=>{
        let discountPrice = order*1.1
        return Math.round(discountPrice)
          
    })
    const total = discountorder.reduce((acc, curr) => acc + curr, 0);

    // Return the total discounted amount
    return total;
    
}
console.log(`Total value of discounted orders:`,calculateDiscountedOrders([120,45,75,30,150]));