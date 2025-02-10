const sum = (num) => {
  let total = 0;
  for (let i = 0; i < num; i++) {
    total += i;
  }
  return total;
};

let result = sum(100);
console.log(result);
