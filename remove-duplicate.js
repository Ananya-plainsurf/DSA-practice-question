/* 
remove duplicate from sorted array

Given an integer array nums sorted in non-decreasing order, 
remove the duplicate in-place such that each unique element appears only once.
The related order of the elements should be kept the same. [1,2,3,4] (this should be maintained) [0,2,3,4]
Then return the number of unique elements in nums.
I/p: [1, 1, 2] -> O/p: 2 [1,2,_]
I/p: [0,0,1,1,1,2,2,3,3,4] -> O/p: 5 [0,1,2,3,4,_,_,_,_,_]
*/

// const removeDuplicate = (nums) => {
//   const uniqueArray = Array.from(new Set(nums));
//   console.log(uniqueArray);
//   //   const elementRemaining = nums.length - uniqueArray.length;
//   //   for (let i = 0; i < elementRemaining; i++) {
//   //     uniqueArray.push("_");
//   //   }
//   return uniqueArray.length;
// };

// console.log(removeDuplicate([1, 1, 2]));
/* time and space -> O(n) space complexity -> O(n) */

/* 
suppose if we have [0,0,1,1,1,2,2,3,3,4]
we will have an array and then remove one element and if 
we find same element in (i+1) nums.splice(i+1,1) and then we will do 
i-- as the actual array will be reduced after removing 1 item
so we will also do i--
*/

const removeDuplicate = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
  return nums.length;
};
console.log(removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
/* time and space -> O(n) space complexity -> O(1) */
