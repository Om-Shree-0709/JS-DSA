function reverseString(inputString) {
  let ans = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    ans += inputString[i];
  }
  return ans;
}

console.log(reverseString("Om Shree"));

//Optimal method :

const reverseString2 = (inputString) => {
  return inputString.split("").reverse().join("");
};

console.log(reverseString2("Om Shree"));
