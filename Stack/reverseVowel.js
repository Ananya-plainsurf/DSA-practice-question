const priorityObj = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};
const reverseVowel = (s) => {
  const str = s.split("");
  const stack = [];
  for (let char of str) {
    if (priorityObj[char.toLocaleLowerCase()]) {
      stack.push(char);
    }
  }
  let newStr = "";
  for (let char of str) {
    if (priorityObj[char.toLocaleLowerCase()]) {
      newStr += stack.pop();
    } else {
      newStr += char;
    }
  }
  return newStr;
};

console.log(reverseVowel("IcecreAm"));
console.log(reverseVowel("Leetcode"));
// console.log(reverseVowel("IcecreAm"));

const reverseVowels = (s) => {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const str = s.split(""); // Convert the string into an array for in-place modification
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    // Move the left pointer until a vowel is found
    while (left < right && !vowels.has(str[left])) {
      left++;
    }

    // Move the right pointer until a vowel is found
    while (left < right && !vowels.has(str[right])) {
      right--;
    }

    // Swap the vowels
    [str[left], str[right]] = [str[right], str[left]];

    // Move both pointers inward
    left++;
    right--;
  }

  return str.join(""); // Convert the array back to a string
};

// Test cases
console.log(reverseVowels("IcecreAm")); // Output: "AeccriEm"
console.log(reverseVowels("Leetcode")); // Output: "Leotcede"
