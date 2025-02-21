const check = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] <= arr[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

//console.log(check([1, 2, 3, 4, 5, 6, 7, 9]));

const check2 = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) return false; // Compare adjacent elements
  }
  return true;
};

console.log(check([3, 4, 5, 1, 2]));
