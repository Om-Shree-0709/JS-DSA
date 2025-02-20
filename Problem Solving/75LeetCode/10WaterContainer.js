/**
 * @param {number[]} height
 * @return {number}
 */

//Approach 1 Brute Force
var maxArea = function (height) {
  let area = -Infinity;
  let n = height.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let width = j - i;
      let minheight = Math.min(height[i], height[j]);
      let area2 = width * minheight;

      if (area > area2) {
        continue;
      } else {
        area = area2;
      }
    }
  }
  return area;
};

//Approach 1 CLeaner
let maxArea2 = (height) => {
  let area = 0;
  let n = height.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let width = j - i;
      let minHeight = Math.min(height[i], height[j]);
      let area2 = width * minHeight;
      area = Math.max(area, area2); // Simplified
    }
  }
  return area;
};

//Approach 2 Pointer Approach

function maxArea3(height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let width = right - left;
    let minHeight = Math.min(height[left], height[right]);
    let currentArea = width * minHeight;

    maxArea = Math.max(maxArea, currentArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

console.log(maxArea3([1, 8, 6, 2, 5, 4, 8, 3, 7]));
