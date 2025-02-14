//Brute Force
const findLargestNumber1 = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
};
/*Time Complexity: O(n)
Space Complexity: O(1) */

const findLargestNumber2 = (arr) => {
  return Math.max(...arr);
};
/*Time Complexity: O(n)
Space Complexity: O(n) */

const findLargestNumber3 = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Invalid input: Please provide a non-empty array.");
  }
  return arr.reduce((max, num) => (num > max ? num : max), arr[0]);
};
/*Time Complexity: O(n)
Space Complexity: O(1) */

console.log(findLargestNumber3([1, 5, 9, 3, 5, 7]));
