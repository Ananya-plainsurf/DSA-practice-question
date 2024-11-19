/* 
rotate array by k;
Given an integer array nums, rotate the array to the right by k steps,
where k is non-negative.

Input: nums = [1,2,3,4,5,6,7], k = 3 -->> O/p: [5,6,7,1,2,3,4]
Input: nums = [-1,-100,3,99], k = 2  -->> O/p: [3,99,-1,-100]


*/

// this is one way of solving the problem
// const rotateByK = (nums, k) => {
//   if (k % nums.length === 0) {
//     return nums;
//   }
//   for (let i = 0; i <= k; i++) { // O(n*k)
//     let shiftNum = nums[0];
//     nums.splice(0, 1); // O(n)
//     nums.push(shiftNum);
//   }
//   return nums;
// };
// console.log(rotateByK([-1, -100, 3, 99], 8));
// time complexity O(n*k) + O(n) = O(2n) => O(n) // worst
// space complexity = O(1)

/* 
another way of solving the problem which is more optimized 
*/
/* we will divide the array in 2 and then append it */

// const rotateByK = (nums, k) => {
//   let size = nums.length;

//   if (size > k) {
//     k = k % size;
//   }
//   console.log(k);
//   const rotated = nums.splice(size - k, size); //[5,6,7] // O(n)
//   console.log(rotated);
//   nums.unshift(...rotated); // O(n)
//   return nums;
// };
// console.log(rotateByK([-1, -100, 3, 99], 2));

// time complexity O(n) + O(n) = O(2n) => O(n) better
// space complexity = O(1)

/* 
another approach is to reverse the array

[1,2,3,45,6,7] k= 3 -> (reverse entire array)[7,6,5,4,3,2,1] -> (reverse 0 - k-1) -> [5,6,7,4,3,2,1] -> reverse k - nums.length (3-8) -> [5,6,7,1,2,3,4]   */

const rotateByK = (nums, k) => {
  let size = nums.length;
  if (size > k) {
    // number of times k will loop
    k = k % size;
  }
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  return nums;
};

function reverse(nums, left, right) {
  while (left < right) {
    const temp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = temp;
  }
  return nums;
}

console.log(rotateByK([-1, -100, 3, 99], 2));
// time complexity O(n) space O(1) most optimized code
