// Question 1: Minimum Cost to Convert Array Elements to Zero

// Problem Statement:

// Given an array of integers A and two operations with associated costs X and Y:

// Choose a subarray A[L...R] and subtract 1 from all elements in the subarray at a cost of X.
// Choose an index i such that A[i] > 0 and set A[i] = 0 at a cost of Y.
// The goal is to determine the minimum cost to convert all elements of the array to zero.

// Example:

// Input: A = [1, 1, 1], X = 1, Y = 2
// Output: 1
// Explanation: By applying operation 1 to the entire array [0...2], we subtract 1 from all elements at a cost of X = 1, resulting in [0, 0, 0]. This is more cost-effective than setting each element to zero individually using operation 2, which would cost 3 * Y = 6.

// Approach:

// To determine the minimum cost, we need to compare the costs of the two operations and decide the optimal strategy:

// Operation 1: Subtracting 1 from a subarray reduces multiple elements simultaneously.
// Operation 2: Setting individual elements to zero directly.
// The choice between these operations depends on the values of X and Y and the distribution of elements in A. A dynamic programming approach can be employed to compute the minimum cost by evaluating the cost-effectiveness of applying operation 1 to various subarrays versus applying operation 2 to individual elements.

function minCostToZero(A, X, Y) {
  let totalCost = 0;
  let i = 0;
  const n = A.length;

  while (i < n) {
    if (A[i] > 0) {
      // Find the length of the contiguous subarray with positive values
      let j = i;
      while (j < n && A[j] > 0) {
        j++;
      }
      const length = j - i;
      // Calculate the cost of setting this subarray to zero
      const costUsingX = X;
      const costUsingY = length * Y;
      // Choose the minimum cost option
      totalCost += Math.min(costUsingX, costUsingY);
      // Move the index to the end of the current subarray
      i = j;
    } else {
      i++;
    }
  }

  return totalCost;
}

// Example usage:
const A = [1, 1, 1];
const X = 1;
const Y = 2;
console.log(minCostToZero(A, X, Y)); // Output: 1
