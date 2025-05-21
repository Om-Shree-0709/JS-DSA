let arr = [1, 23, 4, 5, 6, 7, 8, 9, 23, 1, 4, 6];
let seen = new Set();
let dup = new Set(arr.filter((n) => seen.has(n) || !seen.add(n)));
console.log([...dup]); // [1, 23, 4, 6]
