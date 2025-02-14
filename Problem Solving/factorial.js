const factorialIterative = (num) => {
  if (num < 0) {
    throw new Error("Undefined for negative numbers");
  }

  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

const factorialRecursive = (num) => {
  if (num < 0) {
    throw new Error("Undefined for negative numbers");
  } // Fix
  return num === 0 ? 1 : num * factorialRecursive(num - 1);
};

console.log(factorialIterative(-5)); // Throws error
//console.log(factorialRecursive(0)); // Output: 1
