//Using Hash Set
//If extra space is allowed
const Duplicate = (nums) => {
  let seen = new Set();
  for (let num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
};
/*
  Time: O(n) : Fastest Way
  Space: O(n)
*/

//Using Sorting and Checking
//If extra space is not allowed
let containsDuplicate = (nums) => {
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) return true;
  }
  return false;
};
/*
 Time: O(nlogn)
 Space: O(1)
*/

console.log(Duplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 1]));
