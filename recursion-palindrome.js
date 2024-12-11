// function palindrome(n, i = 0, result = "") {
//   if (i === n.length) {
//     if (n === result) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   let sum = n[i] + result;
//   return palindrome(n, i + 1, (result = sum));
// }
// console.log(palindrome("-121"));

/* above code i using recursion */

// function addString()

// function isPalindrome(params) {
//   let result = "";

//   for (let i = 0; i < params.length; i++) {
//     result = params[i] + result;
//   }
//   console.log({ result, params });

//   //   if (params.length === ) {
//   if (result === params) {
//     return true;
//   } else {
//     return false;
//   }
//   //   }
// }

// console.log(isPalindrome(121));
/* above code is bootforce approch  */

/* now a string or a number is palindrome if last and first number are same 

like : 121 -> pal 121 
101: -> pal 101
*/

function isPalindrome(x) {
  let params = x.toString();
  let left = 0;
  let right = params.length;
  while (left < right) {
    if (x[left] !== x[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("-121"));
