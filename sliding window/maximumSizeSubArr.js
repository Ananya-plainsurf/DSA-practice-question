const maximumSizeSubArr = (num, target) => {
  let curr = 0;

  // Calculate the sum of the first 'target' elements
  for (let i = 0; i < target; i++) {
    curr += num[i];
  }

  let max = curr;

  // Now slide the window
  for (let i = target; i < num.length; i++) {
    curr = curr - num[i - target] + num[i]; // Slide the window by removing the leftmost and adding the next element
    max = Math.max(max, curr); // Update the maximum sum if the new sum is larger
  }

  return max;
};

console.log(maximumSizeSubArr([2, 3, 1, 2, 4, 3], 3)); // Expected output: 9 (subarray [2, 4, 3])

// const maximumSizeSubArr1 = (num, target) => {
//   let initial = 0;

//   // Calculate the sum of the first 'target' elements
//   for (let i = 0; i < target; i++) {
//     initial += num[i];
//   }

//   let curr = initial;

//   // Now slide the window
//   for (let i = 1; i < num.length - k; i++) {}

//   return max;
// };

// console.log(maximumSizeSubArr1([2, 3, 1, 2, 4, 3], 3)); // Expected output: 9 (subarray [2, 4, 3])
