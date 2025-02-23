const rotate = (arr) => {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;

  return arr;
};

const nRotate = (arr, d) => {
  // Store first d elements in temp array
  let temp = arr.slice(0, d);

  // Shift the remaining elements
  for (let i = d; i < arr.length; i++) {
    arr[i - d] = arr[i];
  }

  // Append temp elements to the end
  arr.length = arr.length - d; // Remove the last d elements
  arr.push(...temp);

  return arr;
};

console.log(nRotate([1, 2, 3, 4, 5, 6], 2));
