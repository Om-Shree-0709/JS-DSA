const missingNoXOR = (arr) => {
  let n = arr.length;
  let maxNo = Math.max(...arr);

  let xor1 = 0,
    xor2 = 0;

  // XOR all numbers from 0 to maxNo
  for (let i = 0; i <= maxNo; i++) xor1 ^= i;

  // XOR all elements in the given array
  for (let num of arr) xor2 ^= num;
  

  return xor1 ^ xor2;
};

// Example Usage:
console.log(missingNoXOR([0, 1, 3])); // Output: 2
console.log(missingNoXOR([5, 4, 6, 7, 8, 2, 1, 0, 3])); // Output: 9
