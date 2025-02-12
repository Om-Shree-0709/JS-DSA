//Find the missing no in the array , for given array contains all no till range of array
/*
input= [0,1,3]
output = missing no = 2

input =[5,4,6,7,8,2,1,0,3]
output= misiing no = 9
*/

const missingNo = (num) => {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return (num.length * (num.length + 1)) / 2 - sum;
};

console.log(missingNo([0, 1, 3])); // Output: 2
console.log(missingNo([5, 4, 6, 7, 8, 2, 1, 0, 3])); // Output: 9
