//Brute Force Method
const twoSum1 = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
};

//Using HashMap
const twoSum2 = (nums, target) => {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i]; // Found the pair
    }
    map.set(nums[i], i); // Store the index of the current number
  }
  return null;
};

// Example usage
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

console.log(twoSum([2, 7, 11, 15], 9));
