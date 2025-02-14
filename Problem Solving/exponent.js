//Approach 1: Time Complexity : O(n)
const exponent1 = (base, power) => {
  let ans = 1;
  for (let i = 1; i <= power; i++) {
    ans *= base;
  }
  return ans;
};

//Approach 2:
//Time Complexity: O(log n)
console.log(Math.pow(5, 3));
//Time Complexity: O(log n)
console.log(5 ** 3);

//Approach 3:
//Exponentiation By Squaring
// Time Complexity : O(log n)
const exponent = (base, power) => {
  let result = 1;
  while (power > 0) {
    if (power % 2 === 1) {
      result *= base;
    }
    base *= base;
    power = Math.floor(power / 2);
  }
  return result;
};
console.log(exponent(5, 3));
