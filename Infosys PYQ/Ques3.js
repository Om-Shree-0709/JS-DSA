// Question 2: Golden Divisor Game

// Problem Statement:

// The golden divisor of an integer n is its largest divisor less than itself. Two players, Khaled and Ali, play a game with T numbers. They take turns, with Khaled going first. On each turn, a player can pick a number X and replace it with any positive number Y such that Y < X and Y has the same golden divisor as X. A player who cannot make a move loses. Both players play optimally. The task is to determine the winner.

// Analysis:

// This game can be analyzed using combinatorial game theory. Each number can be considered a separate game, and the overall game is the sum of these individual games. The key is to determine the Grundy number (or nimber) for each individual game, which represents the position's equivalence to a nim game. The Grundy number helps in determining winning and losing positions.

// For a given number X, the possible moves are to replace it with a number Y such that Y has the same golden divisor as X. The golden divisor of X is its largest proper divisor. The game's outcome depends on the properties of these divisors and the possible moves.

// By calculating the Grundy numbers for each initial number and taking their XOR, we can determine the winning strategy. If the XOR is zero, the position is losing for the first player (Khaled); otherwise, it is winning.

function goldenDivisor(n) {
  for (let i = Math.floor(n / 2); i >= 1; i--) {
    if (n % i === 0) {
      return i;
    }
  }
  return 1;
}

function canReduceToOne(n) {
  const gDiv = goldenDivisor(n);
  return gDiv === 1;
}

function goldenDivisorGame(numbers) {
  let khaledWins = 0;

  for (const num of numbers) {
    if (canReduceToOne(num)) {
      khaledWins++;
    }
  }

  return khaledWins % 2 === 1 ? "Khaled" : "Ali";
}

// Example usage:
const numbers = [12, 15, 7];
console.log(goldenDivisorGame(numbers)); // Output: 'Khaled' or 'Ali' depending on the numbers
