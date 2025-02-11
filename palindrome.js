//BRUTE FORCE APPROACH

// Checking if the given number is palindrome or not
let palindrome = (Num) => {
  let copyNum = Num,
    reverseNum = 0;

  while (copyNum > 0) {
    //Step 1 Take the last digit from the given number
    const lastDigit = copyNum % 10;
    //Step 2 Create a New Number (reverseNum) and keep adding them
    reverseNum = reverseNum * 10 + lastDigit;
    //step 3 Prepare the CopyNum for next loop
    copyNum = Math.floor(copyNum / 10);
  }

  return Num === reverseNum;
};

console.log(palindrome(1001));
