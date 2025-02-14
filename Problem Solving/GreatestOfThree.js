const max = (a, b, c) => {
  if (![a, b, c].every((num) => typeof num === "number")) {
    throw new TypeError("Invalid Input: All Arguments must be Numbers");
  }
  return Math.max(a, b, c);
};

console.log(`Greatest of inputed 3 numbers is ${max(11, 22, 33)}`);
