const evenOddCheck = (num) => {
  if (typeof num != "number" || !Number.isInteger(num)) {
    throw new Error("Invalid Input");
  }

  return num % 2 === 0 ? "Even" : "Odd";
};

let ans = evenOddCheck(22);

console.log(`The Given Number is: ${ans}`);
