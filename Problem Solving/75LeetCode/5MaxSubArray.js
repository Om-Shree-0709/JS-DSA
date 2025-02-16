var maxSubArray = function (nums) {
  let sum = 0;
  maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum > maxSum) {
      maxSum = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  return maxSum;
};

console.log(maxSubArray([1, 5, 9, 3, 5, 7, -32, 4, 2, 6]));
console.log(maxSubArray([-2, -3, 4, -1, -2, 1, 5, -3]));
