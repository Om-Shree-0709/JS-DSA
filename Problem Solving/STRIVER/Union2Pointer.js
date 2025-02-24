let unionTwoPointerSorted = (arr1, arr2) => {
  let i = 0,
    j = 0; // Two pointers for each array
  let result = []; // Array to store the union of both arrays

  // Traverse both arrays simultaneously
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      // If the current element in arr1 is smaller, add it to the result
      result.push(arr1[i]);
      i++; // Move pointer of arr1 forward
    } else if (arr1[i] > arr2[j]) {
      // If the current element in arr2 is smaller, add it to the result
      result.push(arr2[j]);
      j++; // Move pointer of arr2 forward
    } else {
      // If both elements are equal (duplicate case), add only one of them
      result.push(arr1[i]);
      i++; // Move both pointers forward to skip duplicate
      j++;
    }
  }

  // Add remaining elements from arr1 (if any)
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  // Add remaining elements from arr2 (if any)
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result; // Return the final merged and unique sorted array
};

// Example usage
console.log(unionTwoPointerSorted([1, 2, 3, 4, 5, 6, 7], [3, 4, 5, 6, 8, 9]));
