/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let n = nums.length; // Total numbers including the missing one
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = nums.reduce((acc, nums) => acc + nums, 0);

  return expectedSum - actualSum;
};

// Example test cases
console.log(missingNumber([3, 0, 1])); // Output: 2
console.log(missingNumber([0, 1])); // Output: 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Output: 8
