// Generates the nth Fibonacci number (0-indexed: fib(0)=0, fib(1)=1)
const fibonacciIterative = (n) => {
  if (n < 0) throw new Error("n must be non-negative");
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 0,
    curr = 1;
  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
};

// To generate the full sequence up to n (inclusive):
const fibonacciSequence = (n) => {
  if (n < 0) throw new Error("n must be non-negative");
  const seq = [];
  let prev = 0,
    curr = 1;
  for (let i = 0; i <= n; i++) {
    if (i === 0) seq.push(0);
    else if (i === 1) seq.push(1);
    else {
      const next = prev + curr;
      seq.push(next);
      prev = curr;
      curr = next;
    }
  }
  return seq;
};

// Example usage:
console.log(fibonacciIterative(100)); // 55
//console.log(fibonacciSequence(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
