//1st Approach
const isPalindrome1 = (str) => {
  let left = 0,
    right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return "Not a Palindrome";
    left++;
    right--;
  }

  return "Is A Palindrome";
};
/*
✅ Time Complexity: O(N) We only iterate through the string once.
✅ Space Complexity: O(1)
 */

//2nd Approach
const isPalindrome2 = (str) => str === str.split("").reverse().join("");
/*
🔹 Time Complexity: O(N) (due to .reverse())
🔹 Space Complexity: O(N) (extra array storage)
 */

console.log(isPalindrome1("racecar"));
console.log(isPalindrome1("Hello"));
console.log(isPalindrome2("racecar"));
console.log(isPalindrome2("Hello"));
