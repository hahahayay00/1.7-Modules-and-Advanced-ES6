// include the following line if planning to use prompt function with Node.js:

const products = [
    { name: "Phone", price: 500, category: "electronics" },
    { name: "Shoes", price: 80, category: "fashion" },
    { name: "TV", price: 300, category: "electronics" },
    { name: "Laptop", price: 1000, category: "electronics" },
    { name: "T-shirt", price: 30, category: "fashion" }
  ];
  
  function filterProductsByPriceAndCategory(minPrices, category) {
    // Your filtering logic goes here
    return products.filter(product => product.price > minPrices && product.category === category)
  }

  console.log(filterProductsByPriceAndCategory(600, "electronics"))