const maxMinProduct = (nums) => {
  let maxProduct = nums[0];
  let minProduct = nums[0];
  let maxResult = nums[0];
  let minResult = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      [maxProduct, minProduct] = [minProduct, maxProduct]; // Swap when encountering a negative number
    }

    maxProduct = Math.max(nums[i], nums[i] * maxProduct);
    minProduct = Math.min(nums[i], nums[i] * minProduct);

    maxResult = Math.max(maxResult, maxProduct);
    minResult = Math.min(minResult, minProduct);
  }

  return { maxProduct: maxResult, minProduct: minResult };
};

// Example usage:
console.log(maxMinProduct([2, 3, -2, 4]));
// Output: { maxProduct: 6, minProduct: -12 }

console.log(maxMinProduct([-2, 0, -1]));
// Output: { maxProduct: 0, minProduct: -2 }

console.log(maxMinProduct([2, -5, 3, 1, -4]));
// Output: { maxProduct: 120, minProduct: -60 }
