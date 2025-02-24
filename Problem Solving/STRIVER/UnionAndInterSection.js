let union = (arr1, arr2) => {
  arr1 = arr1.sort();
  arr2 = arr2.sort();
  let set = new Set();
  for (let i = 0; i < arr1.length; i++) {
    set.add(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    set.add(arr2[i]);
  }

  return set;
};

let union2 = (arr1, arr2) => [...new Set([...arr1, ...arr2])];

console.log(
  JSON.stringify(union2([1, 2, 3, 4, 5, 6, 7], [9, 8, 7, 6, 5, 4, 3, 2, 1]))
);
//If Sorted
//Set(9) { 1, 2, 3, 4, 5, 6, 7, 8, 9 }
//If not Sorted
//Set(9) { 1, 2, 3, 4, 5, 6, 7, 9, 8 }
