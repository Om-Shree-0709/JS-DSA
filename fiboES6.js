// Function to multiply two 2x2 matrices
const multiplyMatrices = (a, b) => [
  [
    a[0][0] * b[0][0] + a[0][1] * b[1][0],
    a[0][0] * b[0][1] + a[0][1] * b[1][1],
  ],
  [
    a[1][0] * b[0][0] + a[1][1] * b[1][0],
    a[1][0] * b[0][1] + a[1][1] * b[1][1],
  ],
];

// Function to raise a matrix to the power n using fast exponentiation
const matrixPower = (matrix, n) => {
  let result = [
    [1, 0],
    [0, 1],
  ]; // Identity matrix
  let base = matrix;

  while (n > 0) {
    if (n & 1) {
      // If n is odd, multiply with base matrix
      result = multiplyMatrices(result, base);
    }
    base = multiplyMatrices(base, base); // Square the base matrix
    n >>= 1; // Divide n by 2
  }

  return result;
};

// Function to compute the nth Fibonacci number using matrix exponentiation
const fibonacciMatrix = (n) => {
  if (n < 0) throw new Error("n must be non-negative");
  if (n === 0) return 0;

  const M = [
    [0, 1],
    [1, 1],
  ]; // Transformation matrix
  const power = matrixPower(M, n);

  return power[0][1]; // The Fibonacci number F(n) is stored at position [0][1]
};

console.log(fibonacciMatrix(500)); // 12586269025
