const checkLeapYear = (year) => {
  if (typeof year != "number") throw new TypeError("Invalid DataType Entered");
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))
    return "Its a Leap Year";
  else return "Its Not a Leap Year";
};

const checkLeapYear2 = (year) => {
  if (!Number.isInteger(year)) return "Invalid Input";
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
    ? "Leap Year"
    : "Not a Leap Year";
};

console.log(checkLeapYear("asdf"));
