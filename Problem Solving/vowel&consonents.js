const count = (str) => {
  let countV = 0;
  let countC = 0;
  for (let s of str.toLowerCase()) {
    if ("aeiou".includes(s)) countV++;
    else if (s >= "a" && s <= "z") countC++; // Ensuring only alphabetic consonants
  }
  return [countC, countV];
};

const uniqueCharacters = (str) => {
  let seen = new Set();
  let result = "";

  for (let char of str) {
    if (!seen.has(char)) {
      seen.add(char);
      result += char;
    }
  }

  return [result.length, result];
};

console.log(uniqueCharacters("OmShree"));
console.log(count("OmShree"));
