//Approach 1 Two pass approach with single array
let productExceptSelf1 = (nums) => {
  let n = nums.length;
  let answer = new Array(n).fill(1);

  //Left
  let left = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = left;
    left *= nums[i];
  }

  //Right
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= right;
    right *= nums[i];
  }
  return answer;
};
/*
Time : O(n)	
Space : O(1)*/

//Prefix & suffix array
const productExceptSelf2 = (nums) => {
  let n = nums.length;
  let prefix = new Array(n).fill(1);
  let suffix = new Array(n).fill(1);
  let result = new Array(n);

  //Prefix Product
  for (let i = 1; i < n; i++) prefix[i] = prefix[i - 1] * nums[i - 1];

  //Suffix
  for (let i = n - 2; i >= 0; i--) suffix[i] = suffix[i + 1] * nums[i + 1];

  //Result
  for (let i = 0; i < n; i++) result[i] = prefix[i] * suffix[i];

  return result;
};

console.log(productExceptSelf1([1, 2, 3]));
