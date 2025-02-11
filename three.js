//Count No of Digits of a Number
//also manage the -ve test cases
let count = (num) => {
  num = Math.abs(num);
  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
};

console.log(count(1023));
