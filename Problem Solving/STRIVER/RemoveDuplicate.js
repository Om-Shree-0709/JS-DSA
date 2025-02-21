const remove = (arr) => {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
  }
  return set;
};

const remove2 = (arr) => new Set(arr);

//console.log(remove2([1, 1, 2, 2, 3, 3]));

const removeDuplicates = (nums) => {
  if (nums.length === 0) return 0; // Edge case

  let k = 1; // Pointer for unique elements

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i]; // Overwrite duplicate position
      k++; // Move unique pointer
    }
  }

  return k; // Number of unique elements
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k = removeDuplicates(nums);
console.log(k); // Output: 5
console.log(nums.slice(0, k)); // Output: [0, 1, 2, 3, 4]
