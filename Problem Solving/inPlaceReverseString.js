const reverseString = (input) => {
  if (typeof input !== "string") {
    throw new TypeError("Invalid Input Type: Must only input a String");
  }

  let arr = input.split("");
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr.join("");
};

console.log(reverseString("123456789"));
// console.log(reverseString(123456789));
