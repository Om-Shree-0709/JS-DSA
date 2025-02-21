let secondLargest = (arr) => {
  let n = arr.length;
  arr = arr.sort((a, b) => a - b);
  let largest = arr[n - 1];

  for (let k = n - 2; k >= 0; k--) {
    if (arr[k] !== largest) return arr[k];
  }
  return null;
};

console.log(secondLargest([5, 9, 1, 3, 2, 4, 7, 8, 6]));
