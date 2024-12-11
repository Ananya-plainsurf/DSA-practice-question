// function kthFactorial(n, k) {
//   const nums = [];
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       console.log("comming in here", i);
//       nums.push(i);
//     }
//   }
//   console.log(nums);
//   if (nums.length < k) {
//     return -1;
//   }
//   return nums[k-1];
// }

// console.log(kthFactorial(12, 3));

function kthFactor(n, k, i = 1, fact = []) {
  if (i > n) {
    return fact[k - 1] || -1;
  }
  if (n % i === 0) {
    fact.push(i);
  }

  return kthFactor(n, k, i + 1, fact);
}

console.log(kthFactor(12, 4));
console.log(kthFactor(5, 1));
console.log(kthFactor(4, 3));
console.log(kthFactor(7, 3));
