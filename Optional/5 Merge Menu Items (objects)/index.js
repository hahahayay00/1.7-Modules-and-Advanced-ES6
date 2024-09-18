// include the following line if planning to use prompt function with Node.js:
const prompt = require('prompt-sync')();
const breakfastMenu = {
    pancakes: 5,
    waffles: 6,
    coffee: 3
  };
  
  const lunchMenu = {
    burger: 8,
    salad: 7,
    soda: 2
  };
  const fullMenu = { ...breakfastMenu, ...lunchMenu };
  console.log('Full Menu:', fullMenu);
  