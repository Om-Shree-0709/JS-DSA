function sum(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}

let result = sum(100);
console.log(result);
