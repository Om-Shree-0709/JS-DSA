// Problem Statement

// There are N passengers in a Bus and each of them pays separate fare for travelling from A to B.

// The passengers thought of grouping themselves so that the entire group pays the same fare. The bus allows a max group of size K.

// Find the total amount saved by the passengers if they start grouping themselves.

// Note:- If P1 passengers pays F1 fare and P2 passenger pays F2 fare. When these two people make a group then they pay fare as 2*min(F1,F2).
// Thus total amount saved is F1+F2-2*min(F1,F2).

// Input:- N=3, arr=[4,4,8], K=2
// Output:- 4

// CODE

function amountSaved(n, arr, k) {
  if (k === 0 || k === 1) return 0;
  let ans = 0;
  let i = 0;
  let j = arr.length - 1;
  let s = 1;
  arr.sort((a, b) => a - b);
  while (i < j) {
    if (s !== k) {
      ans += arr[j] - arr[i];
      s++;
      j--;
    } else {
      i++;
      s = 1;
    }
  }
  return ans;
}

// Example usage:
const n = 3;
const arr = [4, 4, 8];
const k = 2;
console.log(amountSaved(n, arr, k)); // Output: 4
