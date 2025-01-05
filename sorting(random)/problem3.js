// const missingNumber = (nums) => {
//   if (nums.length === 0) return 0;
//   if (nums.length === 1) return nums[0] === 0 ? nums[0] + 1 : nums[0] - 1;
//   nums.sort((a, b) => a - b);
//   if (nums.length && nums[0] > 0) return 0;
//   const n = nums.length;
//   for (let i = 0; i < n; i++) {
//     const nextNo = nums[i] + 1;
//     if (nums[i + 1] !== nextNo) {
//       return nextNo;
//     }
//   }
// };

// optimize solution

const missingNumber = (nums) => {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0] === 0 ? nums[0] + 1 : nums[0] - 1;
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2; // Sum of first n numbers
  const actualSum = nums.reduce((sum, num) => sum + num, 0); // Sum of array elements
  return expectedSum - actualSum; // Missing number is the difference
};

console.log(missingNumber([3, 0, 1])); //2
console.log(missingNumber([0, 1])); //2
console.log(missingNumber([])); //0
console.log(missingNumber([1])); //0
console.log(missingNumber([2])); //1
console.log(missingNumber([0])); //1

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); //8
module.exports = missingNumber;
