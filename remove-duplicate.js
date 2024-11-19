/* 
remove duplicate from sorted array

Given an integer array nums sorted in non-decreasing order, 
remove the duplicate in-place such that each unique element appears only once.
The related order of the elements should be kept the same. [1,2,3,4] (this should be maintained) [0,2,3,4]
Then return the number of unique elements in nums.
I/p: [1, 1, 2] -> O/p: 2 [1,2,_]
I/p: [0,0,1,1,1,2,2,3,3,4] -> O/p: 5 [0,1,2,3,4,_,_,_,_,_]
*/

const removeDuplicate = (nums) => {
  const uniqueArray = Array.from(new Set(nums));
  console.log(uniqueArray);
  //   const elementRemaining = nums.length - uniqueArray.length;
  //   for (let i = 0; i < elementRemaining; i++) {
  //     uniqueArray.push("_");
  //   }
  return uniqueArray.length;
};

console.log(removeDuplicate([1, 1, 2]));
/* time and space -> O(n) */
