var moveZeroes = function (nums) {
  let index = 0; // Pointer for placing non-zero elements

  // Move non-zero elements forward
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i];
      index++;
    }
  }

  // Fill the rest with zeroes
  while (index < nums.length) {
    nums[index] = 0;
    index++;
  }
  return nums;
};

let nums = [0, 11, 2, 0, 39, 4, 0, 5, 6];
console.log(JSON.stringify(moveZeroes(nums)));
