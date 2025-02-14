const multiply = (num) => {
  if (typeof num !== "number") {
    throw new TypeError("Invalid DataType");
  }
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
};

multiply(1);
