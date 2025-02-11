const fibonacciSeriesIterative = (n) => {
  if (n < 0) return []; // For negative input, return an empty array

  const series = [];
  let a = 0,
    b = 1;

  // Add the first Fibonacci number (0) if it is within the limit.
  if (a <= n) series.push(a);

  // Add the second Fibonacci number (1) if it is within the limit.
  if (b <= n) series.push(b);

  while (true) {
    const next = a + b;
    if (next > n) break; // Stop if the next number exceeds n
    series.push(next);
    // Shift for the next iteration:
    a = b;
    b = next;
  }

  return series;
};

// Testing the iterative method:
console.log(fibonacciSeriesIterative(21));
// Expected output: [0, 1, 1, 2, 3, 5, 8, 13, 21]
