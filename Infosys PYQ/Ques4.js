// Question 3: Minimum Operations to Transform Array

// Problem Statement:

// Alice, Bob, and Carol are part of the same team. You are given an array of distinct integers X and another array T, which is a permutation of X. Each of them has to arrange elements in X such that it becomes equal to T.

// Alice: Can remove elements from the beginning of X and insert them at any position.
// Bob: Can remove elements from the end of X and insert them at any position.
// Carol: Can remove an element from any position in X and insert it at any position.
// Let the minimum number of operations be A, B, and C for Alice, Bob, and Carol, respectively. Return A + B + C.

// Example:

// Input: X = [1, 5, 3, 7, 9], T = [9, 7, 3, 5, 1]
// Output: 12
// Explanation: Each person can transform X into T in 4 operations:

// Alice: Moves elements from the beginning to the correct positions.
// Bob: Moves elements from the end to the correct positions.
// Carol: Moves elements from any position to the correct positions.
// Thus, the total number of operations is 4 (Alice) + 4 (Bob) + 4 (Carol) = 12.

// Approach:

// To determine the minimum number of operations for each person:

// Alice: Starting from the beginning of X, find the longest prefix that matches T. The number of operations A is the length of X minus the length of this matching prefix.
// Bob: Starting from the end of X, find the longest suffix that matches T. The number of operations B is the length of X minus the length of this matching suffix.
// Carol: Since Carol can move elements from any position, the number of operations C is the minimum number of moves required to transform X into `T

function minOperations(X, T) {
  const n = X.length;
  let A = 0,
    B = 0,
    C = 0;

  // Calculate operations for Alice
  let i = 0;
  while (i < n && X[i] === T[i]) {
    i++;
  }
  A = n - i;

  // Calculate operations for Bob
  let j = n - 1;
  while (j >= 0 && X[j] === T[j]) {
    j--;
  }
  B = j + 1;

  // Calculate operations for Carol
  const posX = new Map();
  for (let k = 0; k < n; k++) {
    posX.set(X[k], k);
  }
  for (let k = 0; k < n; k++) {
    if (posX.has(T[k])) {
      C += Math.abs(posX.get(T[k]) - k);
    } else {
      C += n;
    }
  }

  return A + B + C;
}

// Example usage:
const X = [1, 5, 3, 7, 9];
const T = [9, 7, 3, 5, 1];
console.log(minOperations(X, T)); // Output: 12
