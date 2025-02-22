const rotate = (arr) => {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;

  return arr;
};

console.log(rotate([1, 2, 3, 4, 5, 6]));

const nRotate = (arr, d) => {
  //Store first d elements in array
  let temp = [];

  for (let i = 0; i < d; i++) {
    temp.push(i);
  }
  for (let i = d; i < arr.length; i++) {
    arr[i - d] = arr[i];
  }

  return arr + temp;
};

console.log(nRotate([1, 2, 3, 4, 5, 6], 2));
