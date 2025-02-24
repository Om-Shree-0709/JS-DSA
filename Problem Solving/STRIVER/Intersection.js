const intersection = (arr1, arr2) => {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
        break; // Stop searching once a match is found
      }
    }
  }
  return result;
};

console.log(intersection([1, 2, 3, 4, 5, 6, 7], [5, 6, 7, 8, 9, 10]));
//Time Complexity : O(N*M)

const intersectionSet = (arr1, arr2) => {
  let set1 = new Set(arr1);
  let result = arr2.filter((num) => set1.has(num)); // Check only once
  return result;
};

console.log(intersectionSet([1, 2, 3, 4, 5, 6, 7], [5, 6, 7, 8, 9, 10]));
//✅ Time Complexity: O(N + M)

const intersectionTwoPointer = (arr1, arr2) => {
  let i = 0,
    j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      result.push(arr1[i]); // Found intersection
      i++;
      j++;
    }
  }

  return result;
};
//✅ Time Complexity: O(N + M)

console.log(intersectionTwoPointer([1, 2, 3, 4, 5, 6, 7], [5, 6, 7, 8, 9, 10]));
