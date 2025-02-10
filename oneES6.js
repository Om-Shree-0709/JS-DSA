const sum = (num) => {
  let total = 0;
  for (let i = 0; i <= num; i++) {
    total += i;
  }
  return total;
};

let ans = sum(100);
console.log(ans);

const result = (num) => {
  return (num * (num + 1)) / 2;
};

let answer = result(100);
console.log(answer);
