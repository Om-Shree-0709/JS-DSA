const sumOfDigits = (num) => {
  if (!Number.isInteger(num) || num < 0)
    throw new TypeError("Invalid Input Type");

  let ans = 0;
  while (num > 0) {
    ans += num % 10;
    num = Math.floor(num / 10); // Remove last digit
  }
  return ans;
};

console.log(sumOfDigits("123456"));
