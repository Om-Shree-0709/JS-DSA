/*Question Statement:
Flatten a Nested Array:
Write a JavaScript function flatten(arr) that takes a nested array and returns a flattened version of it. The function should work for arbitrarily deep nested arrays. Print the output as a single-line string. */

//Approach 1
const flatten1 = (arr) => arr.flat(Infinity); // Use Infinity to fully flatten nested arrays

//Approach 2
const flatten2 = (arr) =>
  arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flatten2(val) : val),
    []
  );

console.log(flatten1([1, [2, 3], 4, [5, [6, 7]]]));
/*Output: [
    1, 2, 3, 4,
    5, 6, 7
    ] */

//If Want in one line
console.log(JSON.stringify(flatten1([1, [2, 3], 4, [5, [6, 7]]])));
//to check type
console.log(typeof JSON.stringify(flatten1([1, [2, 3], 4, [5, [6, 7]]])));
//Output: [1,2,3,4,5,6,7]

console.log(flatten1([1, [2, 3], 4, [5, [6, 7]]]).join(" "));
//Output: 1 2 3 4 5 6 7

console.log(flatten1([1, [2, 3], 4, [5, [6, 7]]]).join(","));
//Output: 1,2,3,4,5,6,7
