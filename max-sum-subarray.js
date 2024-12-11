/*
question - Given an integer array nums, find the subarray with the 
largest sum, and return its sum.

Input: [-2,1,-3,4,-1,2,1,-5,4]  -->> O/p: 6,
Input: [5,4,-1,7,8]  -->> 23

this is solved using Kadane's Method called as Kadane's Algo
 */

const maxSum = (nums) => {
  let finalSum = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > finalSum) {
      finalSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return finalSum;
};
console.log(maxSum([1]));

/* 
time complexity: O(n) space complexity = O(1)
*/
