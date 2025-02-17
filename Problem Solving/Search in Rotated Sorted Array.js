var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid; // Found target, return index

    // Check which part is sorted
    if (nums[left] <= nums[mid]) {
      // Left half is sorted
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1; // Search in left half
      } else {
        left = mid + 1; // Search in right half
      }
    } else {
      // Right half is sorted
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1; // Search in right half
      } else {
        right = mid - 1; // Search in left half
      }
    }
  }

  return -1; // Target not found
};

// Example usage:
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // Output: 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // Output: -1 (not in array)
console.log(search([1], 1)); // Output: 0
console.log(search([1, 3], 3)); // Output: 1
