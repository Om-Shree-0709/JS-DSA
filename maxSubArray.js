//Brute Force method

const maxSubArray = (nums) => {
  let maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let currentSum = 0;
      for (let k = i; k <= j; k++) {
        currentSum += nums[k];
      }
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }
  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
