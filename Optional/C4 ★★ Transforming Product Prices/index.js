// include the following line if planning to use prompt function with Node.js:
const products1=[{name:"Laptop", price: 1000}, {name:"Phone",price:300}]
const products2=[{name:"Headphones", price: 200}, {name:"Speaker",price:200}]

function increaseProductPrices(products){
    const updatedProducts = products.map((product)=>{
        product.price = product.price * 1.1
        // Check if the product pricing is updated correctly
        
        product.price = Math.round(product.price)
        // Check if products is correct
        
        return product

    })
    return updatedProducts
}
console.log('updated price,',increaseProductPrices(products1))
console.log('updated price,',increaseProductPrices(products2))
