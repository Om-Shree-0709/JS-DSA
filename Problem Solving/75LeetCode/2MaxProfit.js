//Using HashMap

const maxProfit = (prices) => {
  let minPrice = Infinity; // Track the minimum price encountered so far
  let maxProfit = 0; // Track the maximum profit

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price; // Update minimum price if current price is lower
    } else {
      maxProfit = Math.max(maxProfit, price - minPrice); // Update max profit
    }
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
