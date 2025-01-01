/* 

palindrome 
I/P: 121 -> true
I?p: 120 -> false
*/

// const palindrome = (str, i = 0, newStr = "") => {
//   console.log({ str, newStr });

//   if (i === str.length) {
//     return Boolean(str === newStr);
//   }
//   return palindrome(str, (i += 1), (newStr += str[str.length - i]));
// };

// console.log(palindrome("nun"));
// console.log(palindrome("121"));
// console.log(palindrome("120"));
//  worse time complexity TC : O(n^2) SC:O(n)

// optimized Solution

const palindrome = (str) => {
  let i = 0;
  let newStr = "";
  while (i < str.length) {
    ++i;
    newStr += str[str.length - i];
  }

  return Boolean(newStr === str);
};

console.log(palindrome("nun"));
console.log(palindrome("121"));
console.log(palindrome("120"));
